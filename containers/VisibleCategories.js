import React from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';
import CategoriesList from '../components/CategoriesList';
import { toggleCategory } from '../actions';


function getCategories(posts) {
    const categories = ['All'];
    posts.map(item => {
        item.categories && item.categories.map(cat => {
            categories.push(cat);
        })
    });

    return _.uniq(categories);
}

const mapStateToProps = state => {
    return {
        categories: getCategories(state.posts),
        selectedCategories: state.categories
    };
}

const mapDispatchToProps = (dispatch) => ({
    onClick: (id) => {
        dispatch(toggleCategory(id));
    }
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoriesList);
