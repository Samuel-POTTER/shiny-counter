import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

type TokenContent = {
    id: string;
    expire_in: string;
};

export const checkInToken = async (req: Request, res: Response, next: NextFunction) => {
    let bearer_token = req.headers['bearer_token'] as string | undefined;

    if (!bearer_token) {
        res.status(401).send('Unauthorized');
        return;
    }
    bearer_token = bearer_token.split(' ')[1];

    jwt.verify(
        bearer_token,
        process.env.JWT_SECRET_KEY!,
        (err: jwt.VerifyErrors | null, decoded: string | jwt.JwtPayload | undefined) => {
            if (err) return res.status(401).send('Unauthorized');
            decoded = decoded as TokenContent;
            req.body.decoded_id = decoded.id;
            next();
        }
    );
};
