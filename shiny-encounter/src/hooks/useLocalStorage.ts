import { useCallback, useState } from 'react';

type SetState<StateType> = (newValue: StateType | ((value: StateType | undefined) => StateType)) => void;

const useLocalStorage = <ValueType>(key: string, initialValue?: ValueType) => {
    const readStorage = useCallback((): ValueType | undefined => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    }, [key, initialValue]);

    const [storedValue, setStoredValue] = useState(readStorage);

    const setStoreValue = useCallback<SetState<ValueType>>(
        newValue => {
            try {
                const newStoredValue = newValue instanceof Function ? newValue(storedValue) : newValue;
                localStorage.setItem(key, JSON.stringify(newStoredValue));
                setStoredValue(newStoredValue);
            } catch (error) {
                console.warn(`Something went wrong while saving ${key} to local storage.`, error);
            }
        },
        [key, storedValue]
    );

    const removeStoreValue = useCallback(() => {
        localStorage.removeItem(key);
        setStoredValue(undefined);
    }, [key]);

    return [storedValue, setStoreValue, removeStoreValue] as const;
};

export default useLocalStorage;
