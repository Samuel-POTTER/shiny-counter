import { useCallback, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getAuthorization } from '../request/auth';
import useLocalStorage from './useLocalStorage';

type OauthType = { auth_token: string; expire_in: number };

const useAuthorization = () => {
    const [authToken, setAuthToken] = useLocalStorage<OauthType>('SHINY_AUTH_TOKEN');
    const token = useQuery('authorization', getAuthorization);

    useEffect(() => {
        if (token.status !== 'success') return;
        setAuthToken({ auth_token: token.data.auth_token, expire_in: token.data.expire_in });
    }, [token.data]);

    const refreshAuthToken = useCallback(() => token.refetch(), [token]);

    useEffect(() => {
        if (!authToken) return;
        const timer = setInterval(refreshAuthToken, authToken.expire_in * 1000);
        return () => clearInterval(timer);
    }, [authToken, refreshAuthToken]);
    return authToken?.auth_token;
};

export default useAuthorization;
