import todo from './todo'
import deepFreeze from 'deep-freeze'

describe('todo reducer', () => {
    it('returns state by default', () => {
        const state = { a: 'anything' };
        deepFreeze(state);
        expect(todo(state, { type: 'XXX' })).toEqual(state)
    });

    it('creates todo', () => {
        const stateAfter = {
            id: 2,
            text: 'todo text',
            completed: false
        };
        const action = {
            type: 'ADD_TODO',
            id: 2,
            text: 'todo text'
        };
        expect(todo(undefined, action)).toEqual(stateAfter)
    });

    it('toggles todo with matching id', () => {
        const stateBefore = {
            id: 2,
            text: 'todo text',
            completed: false
        };
        const stateAfter = {
            ...stateBefore,
            completed: true
        };
        deepFreeze(stateBefore);
        expect(todo(stateBefore, { type: 'TOGGLE_TODO', id: 2 })).toEqual(stateAfter)
    });

    it('does not toggle todo with different id', () => {
        const state = {
            id: 2,
            text: 'todo text',
            completed: false
        };
        deepFreeze(state);
        expect(todo(state, { type: 'TOGGLE_TODO', id: 3 })).toEqual(state)
    });
});
