import React from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';
import PostList from '../components/PostList';
import { togglePost } from '../actions';


function getVisiblePosts(state) {
    if(_.includes(state.categories, 'All')) {
        return state.posts;
    } else {
        return state.posts.filter(item => {
            return !!_.intersection(state.categories, item.categories).length;
        });
    }
}

const mapStateToProps = state => {
    return {
        posts: getVisiblePosts(state)
    };
}

const mapDispatchToProps = (dispatch) => ({
    onClick: (id) => {
        dispatch(togglePost(id));
    }
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostList);
