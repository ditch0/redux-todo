import { combineReducers, createStore } from 'redux';
import visibilityFilter from './reducers/visibilityFilter';
import todos from './reducers/todos';
import { loadState, saveState } from './localStorage';

export default () => {
    const todoApp = combineReducers({ todos, visibilityFilter });
    const store = createStore(todoApp, loadState());
    store.subscribe(() => {
        saveState({
            todos: store.getState().todos
        });
    });
    return store;
};
