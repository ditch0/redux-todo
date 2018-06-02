const STATE_STORAGE_KEY = 'state';

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(STATE_STORAGE_KEY, serializedState);
    } catch (e) {
    }
};

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(STATE_STORAGE_KEY);
        if (serializedState !== null) {
            return JSON.parse(serializedState);
        }
    } catch (e) {
    }
    return undefined;
};
