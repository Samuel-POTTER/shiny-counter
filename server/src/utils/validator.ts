import { Response } from 'express';
import { validateAll } from 'indicative/validator';

const messages = {
    required: (field: any) => `${field} is required`,
    alpha_numeric: (field: any) => `${field} contains unallowed characters`,
    alpha: (field: any) => `${field} contains unallowed characters`,
    email: (field: any) => `${field} is an invalid email address`,
    min: (field: any) => `${field} is too short`,
    max: (field: any) => `${field} is too long`,
    string: (field: any) => `${field} must be a string`
};

interface ErrorRequest {
    message: string;
    validation: string;
    field: string;
}

export let requestValidators = async (rules: any, body: any, res: Response) => {
    return await validateAll(body, rules, messages)
        .then(() => true)
        .catch((e: ErrorRequest[]) => {
            res.status(400).send(e);
            return false;
        });
};
