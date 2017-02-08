import React from 'react';

const Post = ({id, title, content, categories, active, onClick}) => {
    return (
        <li
            className={`title ${active ? 'active' : ''}`}
            onClick={e => {
                onClick(id);
            }
        }>
            <a dangerouslySetInnerHTML={{__html: title}} />
            {active ?
                <div className="content" >
                    <div key="categories" className="categories">
                        {categories.map((item, i) => (
                            <span key={i} className="label label-primary">
                                {item}
                            </span>
                        ))}
                    </div>
                    <div key="content" dangerouslySetInnerHTML={{__html: content}} />
                </div>
                : ''
            }
        </li>
    )
}

export default Post;
