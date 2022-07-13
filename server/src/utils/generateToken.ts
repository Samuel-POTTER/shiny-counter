import jwt from 'jsonwebtoken';

export const generateToken = (payload: string | object | Buffer, expiration: number) => {
    const jwtSecret = process.env.JWT_SECRET_KEY;
    const generateToken = jwt.sign(payload, jwtSecret!, { expiresIn: `${expiration}h` });
    return generateToken;
};
