import React, {Component} from 'react';
import './App.css';
import ToDoList from './Components/ToDoList';
import ToDoItems from './Components/ToDoItems';

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }
  // Filtering the key from the state and removing the item selected
  
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  // Getting the value from the input box and sets the state to "currentItem"
  handleInput = event => {
    const itemText = event.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
            currentItem,
    })
  }

  // Getting the value in the input box from the state
  addItem = event => {
    // Preventing default reload
    event.preventDefault();
    const newItem = this.state.currentItem
    // Checking for empty values
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }

  render() {
    return (
      <div className="App">
        <ToDoList
          // Adds item and calls the function "addItem" when button is clicked
          addItem={this.addItem}
          // Gets the data entered by the user when the button is clicked
          inputElement={this.inputElement}
          // Handles the data entered by the user
          handleInput={this.handleInput}
          // Displaying the value of the state set
          currentItem={this.state.currentItem}
        />
        <ToDoItems entries={this.state.items} deleteItem={this.deleteItem}/>
      </div>
    )
  }
}
export default App