let nextTodoId = 0;

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const addTodo = (text) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
});

export const setVisibilityFilter = (value) => ({
    type: SET_VISIBILITY_FILTER,
    value
});
