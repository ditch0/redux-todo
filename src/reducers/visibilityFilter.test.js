import visibilityFilter from './visibilityFilter';

describe('visibilityFilter', () => {
    it('should set initial state', () => {
        const stateAfter = 'SHOW_ALL';
        expect(visibilityFilter(undefined, {})).toEqual(stateAfter);
    });

    it('should set filter value', () => {
        const stateAfter = 'new value';
        expect(visibilityFilter('old value', { type: 'SET_VISIBILITY_FILTER', value: 'new value' })).toEqual(stateAfter);
    });
});
