import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,

} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      id:0
    }
  }
  
  handleAdd = event => {
    event.preventDefault();
    let newItems = this.state.items;
    if(event.target[0].value.length !==0){
      newItems.push({name: event.target[0].value, id:this.state.id});
      this.setState({
        items: newItems,
        id: this.state.id+1
      })
    }
  }

  handleDelete = itemToDelete => {
    const newItems = this.state.items.filter(item => {
      return item.id !== itemToDelete.id;
    })
    this.setState({
      items: newItems
    })
  }

  handleEdit = itemToEdit => {
    let newItems = this.state.items;
    newItems = newItems.map(item => {
      if(item.id === itemToEdit.id){
        item.name = itemToEdit.name;
      }
      return item
    })
    this.setState({
      items: newItems
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Main 
            items={this.state.items} 
            onAdd={this.handleAdd}
            onDelete={this.handleDelete}
            onEdit={this.handleEdit}
          />
        </Router>
      </div>
    );
  }
}

export default App;
