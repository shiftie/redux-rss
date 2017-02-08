import React from 'react';
import { connect } from 'react-redux'
import Category from './Category';

const CategoriesList = (props) => {
    return (
        <div>
            {props.categories && props.categories.map((category, i) => {
                return (
                    <Category key={i} title={category} {...props}/>
                )
            })}
        </div>
    )
}

export default CategoriesList;
