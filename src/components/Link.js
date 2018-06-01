import React from 'react';

export default ({ active, onClick, children }) => {
    return active
        ? <span>{children}</span>
        : <a href="#" onClick={(e) => { e.preventDefault(); onClick(); }}>{children}</a>
};
