import { createContext, useState } from 'react';
import useAuthorization from '../hooks/useAuthorization';

type AuthContextProps = {
    accessToken: string | undefined;
    setAccessToken: React.Dispatch<React.SetStateAction<string>>;
    refreshToken: string | undefined;
    setRefreshToken: React.Dispatch<React.SetStateAction<string>>;
    authToken: string | undefined;
};
export const AuthContext = createContext<AuthContextProps>(null!);

type AuthContextProviderProps = {
    children?: React.ReactNode;
};

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const authToken = useAuthorization();
    const [accessToken, setAccessToken] = useState('');
    const [refreshToken, setRefreshToken] = useState('');
    return (
        <AuthContext.Provider
            value={{ authToken: authToken, accessToken, setAccessToken, refreshToken, setRefreshToken }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
