import { useQuery } from 'react-query';
import { getPokemonInfo } from '../request/pokemon';

const usePokemonInfo = (pokemonName: string) => {
    const { data } = useQuery(['pokemon-info', pokemonName], () => getPokemonInfo(pokemonName), {
        enabled: pokemonName !== ''
    });
    return data;
};

export default usePokemonInfo;
