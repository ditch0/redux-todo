import { SET_VISIBILITY_FILTER } from '../actions';

export default (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.value;
        default:
            return state;
    }
}
