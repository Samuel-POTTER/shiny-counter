import { Request, Response } from 'express';
import MakeRules from './rules';
import { requestValidators } from './validator';

export const Bind = async <T>(req: Request, res?: Response, rules?: string[]) => {
    if (!res) return req.body as T;
    if (!rules) return req.body as T;

    const n_rules = MakeRules(rules);
    const isValidated = await requestValidators(n_rules, req.body, res);

    return isValidated ? (req.body as T) : false;
};
