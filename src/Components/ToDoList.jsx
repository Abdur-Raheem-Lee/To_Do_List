import React, { Component } from 'react';
import './ToDoList.css';

class ToDoList extends Component {
    // Called and updated when the form is submitted
    componentUpdate() {
        this.props.inputElement.current.focus()
    }

    render() {
        return ( <
            div className = "toDoListMain" >
            <
            div className = "header" > { /* Getting the information that the user entered into the input */ } <
            form onSubmit = { this.props.addItem } >
            <
            input autoFocus name = "addToDo"
            placeholder = "Enter To Do..."
            ref = { this.props.inputElement }
            value = { this.props.currentItem.text }
            onChange = { this.props.handleInput }
            />&emsp; <
            button type = "submit" > Add Task < /button> <
            hr / >
            <
            /form> < /
            div > <
            /div>
        )
    }
}

export default ToDoList;