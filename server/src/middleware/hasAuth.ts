import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

type TokenContent = {
    id: string;
    expire_in: string;
};

export const hasAuth = (req: Request, res: Response, next: NextFunction) => {
    let authorization = req.headers['authorization'] as string | undefined;
    if (!authorization) {
        res.status(403).send('Forbidden');
        return;
    }
    authorization = authorization.split(' ')[1];
    const jwtSecret = process.env.OAUTH_SECRET_KEY!;

    jwt.verify(
        authorization,
        jwtSecret,
        (err: jwt.VerifyErrors | null, decoded: string | jwt.JwtPayload | undefined) => {
            if (err) return res.status(403).send('Forbidden');
            decoded = decoded as TokenContent;
            req.body.decoded_id = decoded.id;
            next();
        }
    );
};
