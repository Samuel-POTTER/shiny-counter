type AuthState = {
    accessToken: string | null;
    refreshToken: string | null;
    authToken: string | null;
};

type AuthAction = {
    type: string;
    payload: any;
};

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                accessToken: action.payload.access_token,
                refreshToken: action.payload.refresh_token
            };
        case 'SIGN_UP':
            return {
                ...state,
                accessToken: action.payload.access_token,
                refreshToken: action.payload.refresh_token
            };
        case 'SINGN_OUT':
            return {
                ...state,
                accessToken: null,
                refreshToken: null
            };
        default:
            throw new Error('No action');
    }
};
