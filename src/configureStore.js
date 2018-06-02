import { createStore } from 'redux';
import { loadState, saveState } from './localStorage';
import todoApp from './reducers';

export default () => {
    const store = createStore(todoApp, loadState());
    store.subscribe(() => {
        saveState({
            todos: store.getState().todos
        });
    });
    return store;
};
