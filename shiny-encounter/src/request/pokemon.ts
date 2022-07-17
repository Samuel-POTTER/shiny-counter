import axios from 'axios';
import { SpeciesInfo } from '../type/species';
import { PokemonInfo } from '../type/type';

export const getAllPokemons = async (offset: number = 0) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`);
    return response.data;
};

export const getPokemonInfo = async (pokemonName: string) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    return response.data as PokemonInfo;
};

export const getSpecies = async (pokemonName: string) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`);
    return response.data as SpeciesInfo;
};
