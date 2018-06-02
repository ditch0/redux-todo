import React from 'react';
import { Provider } from 'react-redux';
import TodoApp from './TodoApp';

export default ({ store }) => {
    return (
        <Provider store={store}>
            <TodoApp />
        </Provider>
    )
}
