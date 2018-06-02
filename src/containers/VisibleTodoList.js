import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions';
import { filterVisibleTodos } from '../reducers';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, { match }) => ({
    todos: filterVisibleTodos(state, match.params.filter || 'all')
});

export default withRouter(
    connect(
        mapStateToProps,
        { onTodoClick: toggleTodo }
    )(TodoList)
);
