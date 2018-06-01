import Todo from './Todo';
import React from 'react';

export default ({ todos, onTodoClick }) => {
    return (
        <ul>
            {todos.map(todo =>
                <Todo
                    key={todo.id}
                    onClick={() => onTodoClick(todo.id)}
                    {...todo}
                />
            )}
        </ul>
    );
};
