import { useCallback } from 'react';

type SetState<StateType> = (newValue: StateType | ((value: StateType | undefined) => StateType)) => void;

export const useLocalStorage = (key: string, newValue?: StateType) => {
    const getStorage = useCallback(() => {
        const currentValue = localStorage.getItem(key);
        return currentValue ? JSON.parse(currentValue) : newValue;
    }, [key, newValue]);

    const setStorage = useCallback(
        (newValue: StateType | undefined) => {
            try {
                localStorage.setItem(key, JSON.stringify(newValue));
            } catch (error) {
                console.warn(`Something went wrong while saving ${key} to local storage.`, error);
            }
        },
        [key]
    );

    const removeStorage = useCallback(() => {
        localStorage.removeItem(key);
    }, [key]);
    return [getStorage, setStorage, removeStorage] as const;
};
