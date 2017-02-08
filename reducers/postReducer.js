import _ from 'lodash';
import {initialState} from '../config/initialState';

const postReducer = (state = initialState.posts, action) => {
    const posts = [...state];
    switch (action.type) {
        case 'ADD':
            posts.push(action.post);
            return posts;
        case 'RECEIVE_POSTS':
            const posts = action.posts.map(item => {
                return {...item, id: item.guid};
            });
            return posts;
        case 'TOGGLE_POST':
            const post = _.find(posts, {id: action.id});
            if(!post) {
                return posts;
            }
            post.active = !post.active;
            return posts;
        default:
            return state;
    }
}

export default postReducer;
