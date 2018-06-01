import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let input;

const handleAddButtonClick = (dispatch) => {
    const text = input.value;
    if (text === '') {
        return;
    }
    dispatch(addTodo(text));
    input.value = '';
};

const AddTodo = ({ dispatch }) => {
    return (
        <div>
            <input type="text" ref={(node) => { input = node }}/>
            <button onClick={() => handleAddButtonClick(dispatch)}>Add</button>
        </div>
    )
};

export default connect()(AddTodo);
