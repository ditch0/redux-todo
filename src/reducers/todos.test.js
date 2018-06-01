import deepFreeze from 'deep-freeze'
import todos from './todos'

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
