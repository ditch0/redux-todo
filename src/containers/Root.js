import React from 'react';
import { Provider } from 'react-redux';
import TodoApp from './TodoApp';
import { BrowserRouter, Route } from 'react-router-dom';

export default ({ store }) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route path="/:filter?" component={TodoApp} />
            </BrowserRouter>
        </Provider>
    )
}
