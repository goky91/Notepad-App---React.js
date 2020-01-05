import React, {Component} from 'react';
import ListItem from "./ListItem/ListItem.js";
import './App.css';

class App extends Component {

  state = {
    currentInput: '',
    inputsList: []
  }

  currentInputValue = (event) => {
    this.setState({currentInput: event.target.value});
  }

  saveInputValue = () => {
    if (this.state.currentInput !== '') {
      this.setState({
        inputLists: this.state.inputsList.push(this.state.currentInput),
        currentInput: ''
      })
    }
  }

  deleteItem = (index) => {
      this.state.inputsList.splice(index, 1);
      this.setState({
        inputsList: this.state.inputsList
      });
  }

  render() {

    const renderLists = this.state.inputsList.map( (item, index)=>{
      return (
          <ListItem key={index} name={index}  label={item} deleteItem={()=>{this.deleteItem(index)} } />
      );
    });

    return (
      <div className="App">
        <div className="note">
          <div className="note__header">
            <input onChange={this.currentInputValue} value={this.state.currentInput} id="inputText" type="text" placeholder="Enter new note..." />
            <button onClick={this.saveInputValue}>Add</button>
          </div>
          <div id="note__body">
            {renderLists}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
