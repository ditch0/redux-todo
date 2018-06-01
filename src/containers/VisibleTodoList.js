import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions';

const filterTodos = (todos, visibilityFilter) => {
    return todos.filter((todo) => {
        switch (visibilityFilter) {
            case 'SHOW_COMPLETED':
                return todo.completed;
            case 'SHOW_UNCOMPLETED':
                return !todo.completed;
            default:
                return true;
        }
    })
};

const mapStateToProps = ({ todos, visibilityFilter }) => ({
    todos: filterTodos(todos, visibilityFilter)
});

const mapDispatchToProps = (dispatch) => ({
    onTodoClick(id) {
        dispatch(toggleTodo(id))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
