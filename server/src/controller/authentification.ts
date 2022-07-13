import { compareSync, hashSync } from 'bcryptjs';
import { Request, Response } from 'express';
import Prisma from '../database';
import { Bind } from '../utils/binder';
import { generateToken } from '../utils/generateToken';

type AuthentificationParams = {
    name: string;
    email: string;
    password: string;
};

export const SignUp = async (req: Request, res: Response) => {
    const payload = await Bind<AuthentificationParams>(req, res, ['email:r|e', 'password:r|mn/8', 'name:r|s']);
    if (!payload) return;

    const oldUser = await Prisma.getInstance().user.findUnique({ where: { email: payload.email } });
    if (oldUser) return res.status(409).send('User already exists');

    const newUser = await Prisma.getInstance().user.create({
        data: {
            name: payload.name,
            email: payload.email,
            password: hashSync(payload.password)
        }
    });

    const accessToken = generateToken({ id: newUser.id }, 4);
    const refreskToken = generateToken({}, 8);
    res.status(201).send({ access_token: accessToken, refresh_token: refreskToken });
};

export const SignIn = async (req: Request, res: Response) => {
    const payload = await Bind<AuthentificationParams>(req, res, ['email:r|e', 'password:r|mn/8']);

    if (!payload) return;
    const user = await Prisma.getInstance().user.findUnique({
        where: {
            email: payload.email
        }
    });
    if (!user) {
        res.status(401).send('User not found');
        return;
    }
    if (!compareSync(payload.password, user.password)) {
        res.status(401).send('Wrong password');
        return;
    }
    const accessToken = generateToken({ id: user.id }, 4);
    const refreskToken = generateToken({}, 8);
    res.status(200).send({ access_token: accessToken, refresh_token: refreskToken });
};
