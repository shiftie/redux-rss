import React, {Component} from 'react'
import { connect } from 'react-redux'
import VisiblePostList from './containers/VisiblePostList';
import VisibleCategories from './containers/VisibleCategories';
import AddPost from './containers/AddPost';

const App = ({style}) => (
	<div style={style} >
		<VisibleCategories />
		<VisiblePostList />
	</div>
)

const mapStateToProps = state => {
    return {
        style: {opacity: state.fetching !== true ? 1 : 0.5}
    };
}

export default connect(mapStateToProps)(App);
