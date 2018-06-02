import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions';
import { filterVisibleTodos } from '../reducers';

const mapStateToProps = (state) => ({
    todos: filterVisibleTodos(state)
});

export default connect(mapStateToProps, { onTodoClick: toggleTodo })(TodoList);
