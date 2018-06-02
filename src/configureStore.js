import visibilityFilter from './reducers/visibilityFilter';
import todos from './reducers/todos';
import { combineReducers, createStore } from 'redux';

export default () => {
    const todoApp = combineReducers({ todos, visibilityFilter });
    return createStore(todoApp);
}
