import visibilityFilter from './visibilityFilter';
import todos, * as fromTodos from './todos';
import { combineReducers } from 'redux';

const todoApp = combineReducers({ todos, visibilityFilter });

export default todoApp;

export const filterVisibleTodos = (state) => {
    return fromTodos.filterVisibleTodos(state.todos, state.visibilityFilter);
};
