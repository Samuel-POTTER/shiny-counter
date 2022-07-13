import { Request, Response } from 'express';
import Prisma from '../database';
import { Bind } from '../utils/binder';

type CardParams = {
    name: string;
    encounter: number;
    image: string;
    gif: string;
};

export const createCard = async (req: Request, res: Response) => {
    const payload = await Bind<Omit<CardParams, 'encounter'>>(req, res, ['name:r|s', 'image:r|s', 'gif:r|s']);
    if (!payload) return;

    const { decoded_id } = req.body;
    const oldCard = await Prisma.getInstance().pokemonCard.findUnique({ where: { name: payload.name } });
    if (oldCard) {
        res.status(400).send('Card already exists');
        return;
    }

    const card = await Prisma.getInstance().pokemonCard.create({
        data: {
            name: payload.name,
            image: payload.image,
            gif: payload.gif,
            userId: decoded_id
        }
    });
    res.status(200).send(card);
};

export const getAllCards = async (req: Request, res: Response) => {
    const { decoded_id } = req.body;

    const cards = await Prisma.getInstance().pokemonCard.findMany({
        where: {
            userId: {
                equals: decoded_id
            }
        }
    });
    res.status(200).send(cards);
};

export const incrementEncounter = async (req: Request, res: Response) => {
    const payload = await Bind<{ name: string; encounter: number }>(req, res, ['name:r|s', 'encounter:r|n']);
    if (!payload) return;

    const { decoded_id } = req.body;

    const card = await Prisma.getInstance().pokemonCard.findFirst({
        where: {
            name: payload.name,
            userId: {
                equals: decoded_id
            }
        }
    });
    if (!card) {
        res.status(400).send('Card not found');
        return;
    }

    const encounterUpdate = await Prisma.getInstance().pokemonCard.update({
        where: { id: card.id },
        data: {
            encounter: card.encounter ? card.encounter + payload.encounter : payload.encounter
        }
    });
    res.status(200).send(encounterUpdate);
};

export const foundPokemon = async (req: Request, res: Response) => {
    const payload = await Bind<{ id: string; found: boolean }>(req, res, ['id:r|s', 'found:r|b']);
    if (!payload) return;

    const { decoded_id } = req.body;
    const card = await Prisma.getInstance().pokemonCard.findFirst({
        where: {
            id: payload.id,
            userId: {
                equals: decoded_id
            }
        }
    });
    if (!card) {
        res.status(400).send('Card not found');
        return;
    }

    const foundUpdate = await Prisma.getInstance().pokemonCard.update({
        where: { id: card.id },
        data: {
            found: payload.found
        }
    });
    res.status(200).send(foundUpdate);
};
