import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux';
import todos from './reducers/todos';
import visibilityFilter from './reducers/visibilityFilter';
import TodoApp from './containers/TodoApp';
import { Provider } from 'react-redux';
import './index.css';

const todoApp = combineReducers({ todos, visibilityFilter });
const store = createStore(todoApp);
ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);
store.subscribe(() => console.log(store.getState()));

registerServiceWorker();
