import React from 'react';
import { connect } from 'react-redux'
import Post from './Post';

const PostList = ({posts, onClick}) => {
    return (
        <ul className="nav nav-pills nav-stacked">
            {posts && posts.map((post,i) => {
                return (
                    <Post key={i} {...post} onClick={onClick}/>
                )
            })}
        </ul>
    )
}

export default PostList;
