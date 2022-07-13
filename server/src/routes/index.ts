import { Router } from 'express';
import { SignIn, SignUp } from '../controller/authentification';
import { createCard, foundPokemon, getAllCards, incrementEncounter } from '../controller/pokemon';
import { checkInToken } from '../middleware/checkInToken';

const router = Router();

// Authentification
router.post('/signup', SignUp);
router.post('/signin', SignIn);

// Pokemon request
router.post('/pokemon', checkInToken, createCard);
router.get('/pokemon', checkInToken, getAllCards);
router.put('/pokemon/:pokemon', checkInToken, incrementEncounter);
router.put('/pokemon/pokemonId', checkInToken, foundPokemon);

export default router;
