import { useCallback } from 'react';
import { QueryKey, useQueryClient } from 'react-query';

export const useInvalidateQuery = () => {
    const queryClient = useQueryClient();

    return useCallback((keys: QueryKey | undefined) => queryClient.invalidateQueries(keys), [queryClient]);
};
