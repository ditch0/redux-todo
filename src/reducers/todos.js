import todo from './todo'
import { ADD_TODO, TOGGLE_TODO } from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ];
        case TOGGLE_TODO:
            return state.map((item) => todo(item, action));
        default:
            return state
    }
};

export const filterVisibleTodos = (state, filter) => {
    return state.filter((todo) => {
        switch (filter) {
            case 'SHOW_COMPLETED':
                return todo.completed;
            case 'SHOW_UNCOMPLETED':
                return !todo.completed;
            case 'SHOW_ALL':
                return true;
            default:
                throw new Error(`Unsupported filter value: ${filter}`);
        }
    })
};
