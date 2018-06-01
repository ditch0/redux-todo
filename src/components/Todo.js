import React from 'react';

export default ({ text, completed, onClick }) => {
    return (
        <li
            onClick={onClick}
            style={{ textDecoration: completed ? 'line-through' : '' }}
        >{text}</li>)
};
