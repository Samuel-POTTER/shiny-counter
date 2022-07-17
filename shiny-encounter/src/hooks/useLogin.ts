import { useCallback, useContext } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { login } from '../request/auth';

const useLogin = () => {
    const { authToken, setAccessToken, setRefreshToken } = useContext(AuthContext);
    const navigate = useNavigate();
    const mutation = useMutation(login, {
        onSuccess: data => {
            setAccessToken(data.access_token);
            setRefreshToken(data.refresh_token);
            navigate('/home');
        }
    });

    const loginCallback = useCallback(
        (email: string, password: string) => {
            if (!email || !password || !authToken) return;
            return mutation.mutate({ email, password, token: authToken });
        },
        [authToken, mutation]
    );

    return loginCallback;
};

export default useLogin;
