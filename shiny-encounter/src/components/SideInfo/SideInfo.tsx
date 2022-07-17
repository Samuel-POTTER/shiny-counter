import { useQueryClient } from 'react-query';
import useSpecies from '../../hooks/useSpecies';
import { PokemonInfo } from '../../type/type';
import { Stats } from '../Stats/Stats';

type SideInfoProps = {
    name: string;
};
export const SideInfo = ({ name }: SideInfoProps) => {
    const queryClient = useQueryClient();
    const data: undefined | PokemonInfo = queryClient.getQueryData(['pokemon-info', name]);
    const [speciesInfo, success] = useSpecies(name);

    return (
        <div
            style={{ imageRendering: 'pixelated' }}
            className='fixed h-full w-1/5 flex flex-col left-[70%] bg-white rounded-3xl shadow-lg'
        >
            {data && success ? (
                <>
                    <img
                        className='absolute -top-32 w-56 left-1/2 -translate-x-1/2'
                        src={data?.sprites.versions?.['generation-v']['black-white'].animated?.front_shiny}
                        alt={name}
                    />
                    <div className='flex flex-col mt-40 justify-center'>
                        <b className=' text-center text-xs text-gray-400'>N°{data?.id}</b>
                        <b className='text-2xl text-center'>{data?.name}</b>
                        <div className='flex justify-center space-x-4 mt-4'>
                            {data?.types.map((type, key) => (
                                <span key={key} className='bg-gray-200 rounded-md font-semibold px-2 py-1 text-sm'>
                                    {type.type.name}
                                </span>
                            ))}
                        </div>
                        <p className='text-center text-gray-400 font-semibold mt-2'>
                            {speciesInfo?.flavor_text_entries[0].flavor_text}
                        </p>
                        <div className='flex items-center'>
                            <Stats info='Height' value={data?.height} />
                            <Stats info='Weight' value={data?.weight} />
                        </div>
                    </div>
                </>
            ) : (
                <div className='flex flex-col items-center justify-center h-full'>
                    <p className='font-semibold text-lg text-gray-400 w-1/2 text-center'>
                        Select a pokemon to display here.
                    </p>
                    <img src='./pokeball-icon.png' className='w-10 h-10 mt-10' alt='pokeball' />
                </div>
            )}
        </div>
    );
};
