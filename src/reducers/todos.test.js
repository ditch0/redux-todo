import deepFreeze from 'deep-freeze'
import todos, { filterVisibleTodos } from './todos'

describe('todos reducer', () => {
    it('should initialize state', () => {
        expect(todos(undefined, {})).toEqual({ byId: {}, allIds: [] });
    });

    it('should add todo to list', () => {
        const stateBefore = {
            byId: {
                1: {
                    id: 1,
                    text: 'first todo',
                    completed: true
                }
            },
            allIds: [1]
        };
        const stateAfter = {
            byId: {
                1: {
                    id: 1,
                    text: 'first todo',
                    completed: true
                },
                2: {
                    id: 2,
                    text: 'second todo',
                    completed: false
                }
            },
            allIds: [1, 2]
        };

        deepFreeze(stateBefore);
        expect(todos(stateBefore, { type: 'ADD_TODO', id: 2, text: 'second todo' })).toEqual(stateAfter)
    });

    it('should toggle todo', () => {
        const stateBefore = {
            byId: {
                1: {
                    id: 1,
                    text: 'first todo',
                    completed: true
                },
                2: {
                    id: 2,
                    text: 'second todo',
                    completed: false
                }
            },
            allIds: [1, 2]
        };
        const stateAfter = {
            byId: {
                1: {
                    id: 1,
                    text: 'first todo',
                    completed: true
                },
                2: {
                    id: 2,
                    text: 'second todo',
                    completed: true
                }
            },
            allIds: [1, 2]
        };

        deepFreeze(stateBefore);
        expect(todos(stateBefore, { type: 'TOGGLE_TODO', id: 2 })).toEqual(stateAfter)
    });
});

describe('filterVisibleTodos', () => {
    const completedTodo = {
        id: 1,
        text: 'first todo',
        completed: true
    };
    const uncompletedTodo = {
        id: 2,
        text: 'second todo',
        completed: false
    };
    const state = {
        byId: {
            [completedTodo.id]: completedTodo,
            [uncompletedTodo.id]: uncompletedTodo
        },
        allIds: [completedTodo.id, uncompletedTodo.id]
    };
    deepFreeze(state);

    it('should show completed todos', () => {
        expect(filterVisibleTodos(state, 'completed')).toEqual([completedTodo]);
    });

    it('should show uncompleted todos', () => {
        expect(filterVisibleTodos(state, 'uncompleted')).toEqual([uncompletedTodo]);
    });

    it('should show all todos', () => {
        expect(filterVisibleTodos(state, 'all')).toEqual([completedTodo, uncompletedTodo]);
    });

    it('should throw an exception for unsupported filter value', () => {
        expect(() => filterVisibleTodos(state, 'XXX')).toThrowError();
    });
});
