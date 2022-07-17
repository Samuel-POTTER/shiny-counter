import { useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { getAllPokemons } from '../request/pokemon';

const useAllPokemons = () => {
    const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
        'all-pokemons',
        ({ pageParam = 0 }) => getAllPokemons(pageParam),
        {
            getNextPageParam: (lastPage, allPages) => {
                const maxPages = lastPage.count / 20;
                const nextPage = allPages.length + 20;
                const res = lastPage.next?.split('=')[1].split('&')[0];
                return nextPage <= maxPages ? res : undefined;
            }
        }
    );

    useEffect(() => {
        const onScroll = async (e: any) => {
            let fetching = false;
            const offset = 1.5;
            const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement;
            if (!fetching && scrollHeight - scrollTop <= clientHeight * offset) {
                fetching = true;
                if (hasNextPage) await fetchNextPage();
                fetching = false;
            }
        };
        document.addEventListener('scroll', onScroll);
        return () => document.removeEventListener('scroll', onScroll);
    }, [fetchNextPage, hasNextPage]);
    return data;
};

export default useAllPokemons;
