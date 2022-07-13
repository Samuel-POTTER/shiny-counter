import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const authorization = async (req: Request, res: Response) => {
    const jwtSecret = process.env.OAUTH_SECRET_KEY;

    const generateToken = jwt.sign({}, jwtSecret!, { expiresIn: '2h' });
    res.status(200).send(generateToken);
};
