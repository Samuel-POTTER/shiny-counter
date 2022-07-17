type StatsProps = {
    info: string;
    value: number;
};

export const Stats = ({ info, value }: StatsProps) => {
    return (
        <div className='w-1/2 mx-2'>
            <p className='font-2xl text-center font-bold mt-2'>{info}</p>
            <p className='w-full text-center bg-primary rounded-full py-2 font-semibold mt-2'>{value && value / 10}m</p>
        </div>
    );
};
