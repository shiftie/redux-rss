import React from 'react';
import { connect } from 'react-redux'
import { addPost } from '../actions';

function getCategories(str) {
    return str.split(',').filter(item => item.length > 0).map(item => item.trim());
}

function isValid(title, content) {
    return title.length && content.length;
}

function resetForm(title, content, categories) {
    title.value = '';
    content.value = '';
    categories.value = '';
}

const AddPost = ({posts, dispatch}) => {
    let title;
    let content;
    let categories;

    return (
        <form
            className="form-group"
            onSubmit={e => {
                e.preventDefault();
                if (!isValid(title.value, content.value)) {
                    return;
                }
                dispatch(addPost(posts, title.value, content.value, getCategories(categories.value)));
                resetForm(title, content, categories);
            }}
        >
            <input ref={inp => {title = inp}} placeholder="Title" className="form-control" />
            <textarea ref={inp => {content = inp}} placeholder="Content" className="form-control" />
            <input ref={inp => {categories = inp}} placeholder="Categories" className="form-control" />
            <input type="submit" value="OK" className="btn btn-primary" />
        </form>
    );
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps)(AddPost);
