import { useQuery } from 'react-query';
import { getSpecies } from '../request/pokemon';

const useSpecies = (name: string) => {
    const { data, isSuccess } = useQuery(['species-info', name], () => getSpecies(name));
    return [data, isSuccess] as const;
};

export default useSpecies;
