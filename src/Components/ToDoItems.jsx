import React, { Component } from 'react'
import Button from '../../node_modules/react-bootstrap/Button';

class ToDoItems extends Component {
  // Returning a list item for each entry
  createTasks(item) {
    return (
      // Deletes an item when its prop is passed from "App.js"
      <li key={item.key}>
        {item.text}&emsp;<Button onClick={() => this.props.deleteItem(item.key)}>Remove</Button><hr/>
      </li>
    )
  }
  render() {
    const toDoEntries = this.props.entries
    const listItems = toDoEntries.map(this.createTasks)
    return <ul className="theList">{listItems}</ul>
  }
}
export default ToDoItems