import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import AddNewTask from './addTask';
import TodoAppList from './app.list';

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {tasks: props.tasks};
    this.updateList = this.updateList.bind(this);
  }

  updateList(text) {
    var updatedTasks = this.state.tasks;
    updatedTasks.push(text);
    this.setState({tasks: updatedTasks});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo List with React</h2>
        </div>

        <p className="App-intro">
          <AddNewTask updateList={this.updateList} />
          <TodoAppList tasks={this.state.tasks} />
        </p>
      </div>
    );
  }
}

//export default App;
