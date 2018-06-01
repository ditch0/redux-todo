import FilterLink from './FilterLink';
import React from 'react';

export default () => {
    return (
        <div>
            {'Show: '}
            <FilterLink filter="SHOW_ALL">all</FilterLink>
            {', '}
            <FilterLink filter="SHOW_COMPLETED">completed</FilterLink>
            {', '}
            <FilterLink filter="SHOW_UNCOMPLETED">uncompleted</FilterLink>
        </div>
    )
};
