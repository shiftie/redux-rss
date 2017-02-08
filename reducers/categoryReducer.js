import _ from 'lodash';
import {initialState} from '../config/initialState';

const categoryReducer = (state = initialState.categories, action) => {
    const categories = [...state];
    switch (action.type) {
        case 'TOGGLE_CATEGORY':
            const found = _.remove(categories, (item) => {
                return item === action.id;
            });
            if(!found.length) {
                categories.push(action.id);
            }
            
            return categories;
        default:
            return state
    }
}

export default categoryReducer;
