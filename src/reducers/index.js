import todos, * as fromTodos from './todos';
import { combineReducers } from 'redux';

const todoApp = combineReducers({ todos });

export default todoApp;

export const filterVisibleTodos = ({ todos }, filter) => {
    return fromTodos.filterVisibleTodos(todos, filter);
};
