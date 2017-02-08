import _ from 'lodash';

let index = 0;

function getId(posts) {
    while(_.find(posts, {'id': index})){
        index++;
    }

    return index;
}

function receivePosts(json) {
    return {
        type: 'RECEIVE_POSTS',
        posts: json.items,
        receivedAt: Date.now()
    }
}

export const addPost = (posts, title, content, categories) => {
    return {
        type: 'ADD',
        post: {
            id: getId(posts),
            title,
            content,
            categories
        }
    };
};

export const togglePost = (id) => ({
    type: 'TOGGLE_POST',
    id
});

export const toggleCategory = (id) => ({
    type: 'TOGGLE_CATEGORY',
    id
});

export const toggleFetching = () => ({
    type: 'TOGGLE_FETCHING'
})

export const fetchPosts = () => {
    return function(dispatch) {
        dispatch(toggleFetching());
        return fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fcss-tricks.com%2Ffeed%2F')
            .then(response => response.json())
            .then(json => {
                dispatch(toggleFetching());
                dispatch(receivePosts(json));
            });
    }
};
