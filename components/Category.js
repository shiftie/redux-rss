import React from 'react';
import _ from 'lodash';

const Category = ({title, selectedCategories, onClick}) => {
    return (
        <span
            className={_.includes(selectedCategories, title) ? 'label label-primary': 'label label-default'}
            onClick={e => {
                onClick(title);
            }
        }>
            <b>
                {title}
            </b>
        </span>
    )
}

export default Category;
