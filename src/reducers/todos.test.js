import deepFreeze from 'deep-freeze'
import todos, { filterVisibleTodos } from './todos'

describe('todos reducer', () => {
    it('should initialize state with empty list', () => {
        expect(todos(undefined, {})).toEqual([]);
    });

    it('should add todo to list', () => {
        const stateBefore = [
            {
                id: 1,
                text: 'first todo',
                completed: true
            }
        ];
        const stateAfter = [
            ...stateBefore,
            {
                id: 2,
                text: 'second todo',
                completed: false
            }
        ];

        deepFreeze(stateBefore);
        expect(todos(stateBefore, { type: 'ADD_TODO', id: 2, text: 'second todo' })).toEqual(stateAfter)
    });

    it('should toggle todo', () => {
        const stateBefore = [
            {
                id: 1,
                text: 'first todo',
                completed: true
            },
            {
                id: 2,
                text: 'second todo',
                completed: false
            }
        ];
        const stateAfter = [
            {
                id: 1,
                text: 'first todo',
                completed: true
            },
            {
                id: 2,
                text: 'second todo',
                completed: true
            }
        ];

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
    const allTodos = [completedTodo, uncompletedTodo];
    deepFreeze(allTodos);

    it('should show completed todos', () => {
        expect(filterVisibleTodos(allTodos, 'SHOW_COMPLETED')).toEqual([completedTodo]);
    });

    it('should show uncompleted todos', () => {
        expect(filterVisibleTodos(allTodos, 'SHOW_UNCOMPLETED')).toEqual([uncompletedTodo]);
    });

    it('should show all todos', () => {
        expect(filterVisibleTodos(allTodos, 'SHOW_ALL')).toEqual(allTodos);
    });

    it('should throw an exception for unsupported filter value', () => {
        expect(() => filterVisibleTodos(allTodos, 'XXX')).toThrowError();
    });
});
