import { createContext } from 'react';

type AuthContextProps = {
    accessToken: string | undefined;
    authToken: string | undefined;
    refreshToken: string | undefined;
};
const authContext = createContext<AuthContextProps>(null!);

type AuthContextProviderProps = {
    children?: React.ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {};
