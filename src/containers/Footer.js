import FilterLink from './FilterLink';
import React from 'react';

export default () => {
    return (
        <div>
            {'Show: '}
            <FilterLink filter="all">all</FilterLink>
            {', '}
            <FilterLink filter="completed">completed</FilterLink>
            {', '}
            <FilterLink filter="uncompleted">uncompleted</FilterLink>
        </div>
    )
};
