import usePokemonInfo from '../../hooks/usePokemonInfo';

type CardProps = {
    name: string;
    action: (name: string) => void;
};

export const Card = ({ name, action }: CardProps) => {
    const pokemonInfo = usePokemonInfo(name);

    return (
        <div
            onClick={() => action(name)}
            style={{ imageRendering: 'pixelated' }}
            className='rounded-3xl shadow-lg hover:border-2 hover:border-primary flex cursor-pointer items-center group justify-center h-36 w-72 relative z-40 bg-white'
        >
            <img
                className='group-hover:scale-110 group-hover:duration-100 absolute -top-1/3'
                src={pokemonInfo?.sprites.front_default}
                alt={name}
            />
            <div className='flex flex-col justify-center mt-4'>
                <b className=' text-center text-xs text-gray-400'>N°{pokemonInfo?.id}</b>
                <b className='text-lg text-center'>{pokemonInfo?.name}</b>
                <div className='flex justify-center space-x-4 mt-4'>
                    {pokemonInfo?.types.map((type, key) => (
                        <span key={key} className='bg-gray-200 rounded-md font-semibold px-2 py-1 text-sm'>
                            {type.type.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
