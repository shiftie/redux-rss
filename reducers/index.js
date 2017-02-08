import { combineReducers } from 'redux';
import posts from './postReducer';
import categories from './categoryReducer';

const fetching = (state = false, action) => {
    const fetching = state;
    switch (action.type) {
        case 'TOGGLE_FETCHING':
            return !fetching;
        default:
            return state
    }
}

const updated = (state = false, action) => {
    switch (action.type) {
        case 'RECEIVE_POSTS':
            return action.receivedAt;
        default:
            return state
    }
}

const rootReducer = combineReducers({
    fetching,
    updated,
    categories,
    posts
});

export default rootReducer
