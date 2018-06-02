import todo from './todo'
import { ADD_TODO, TOGGLE_TODO } from '../actions';
import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
    switch (action.type) {
        case ADD_TODO:
        case TOGGLE_TODO:
            return {
                ...state,
                [action.id]: todo(state[action.id], action)
            };
        default:
            return state
    }
};

const allIds = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.id];
        default:
            return state;
    }
};

export default combineReducers({ byId, allIds });

const getAllTodos = ({ byId, allIds }) => allIds.map((id) => byId[id]);

export const filterVisibleTodos = (state, filter) => {
    let allTodos = getAllTodos(state);
    switch (filter) {
        case 'all':
            return allTodos;
        case 'completed':
            return allTodos.filter(todo => todo.completed);
        case 'uncompleted':
            return allTodos.filter(todo => !todo.completed);
        default:
            throw new Error(`Unsupported filter value: ${filter}`);
    }
};
