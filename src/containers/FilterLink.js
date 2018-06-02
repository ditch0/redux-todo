import React from 'react';
import { NavLink } from 'react-router-dom';

const FilterLink = ({ filter, children}) => {
    const path = '/' + (filter === 'all' ? '' : filter);
    return (
        <NavLink
            exact
            to={path}
            activeStyle={{
                textDecoration: 'none',
                color: 'black',
            }}
        >{children}</NavLink>
    );
};

export default FilterLink;
