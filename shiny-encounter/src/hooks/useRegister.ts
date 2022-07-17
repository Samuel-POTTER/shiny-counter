import { useCallback, useContext } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { register } from '../request/auth';

const useRegister = () => {
    const { authToken, setAccessToken, setRefreshToken } = useContext(AuthContext);
    const navigate = useNavigate();
    const mutation = useMutation(register, {
        onSuccess: data => {
            setAccessToken(data.access_token);
            setRefreshToken(data.refresh_token);
            navigate('/home');
        }
    });

    const registerCallback = useCallback(
        (email: string, password: string, name: string) => {
            if (!email || !password || !authToken || !name) return;
            return mutation.mutate({
                email,
                name,
                password,
                token: authToken!
            });
        },
        [authToken, mutation]
    );

    return registerCallback;
};

export default useRegister;
