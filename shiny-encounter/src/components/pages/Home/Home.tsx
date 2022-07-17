import { useState } from 'react';
import useAllPokemons from '../../../hooks/useAllPokemons';
import { Card } from '../../Card/Card';
import { SideInfo } from '../../SideInfo/SideInfo';

type pokemonProps = {
    name: string;
    url: string;
};

export const Home = () => {
    const pokemons = useAllPokemons();
    const [selectedPokemon, setSelectedPokemon] = useState('');

    return (
        <div className='bg-primary h-full'>
            <img src='./pokeball-icon.png' className='object-cover absolute  -top-20 -left-48' alt='pokeball' />
            <div className='flex flex-wrap w-3/4 pt-56 gap-y-20 relative justify-center space-x-4 '>
                {pokemons &&
                    pokemons.pages.map(page =>
                        page.results.map((pokemon: pokemonProps, key: number) => {
                            return (
                                <div key={key}>
                                    <Card action={setSelectedPokemon} name={pokemon.name} />
                                </div>
                            );
                        })
                    )}
                <SideInfo name={selectedPokemon} />
            </div>
        </div>
    );
};
