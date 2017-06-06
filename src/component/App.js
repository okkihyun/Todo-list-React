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
    this.removeTask = this.removeTask.bind(this);
  }

  updateList(text) {
    var updatedTasks = this.state.tasks;
    updatedTasks.unshift(text);
    this.setState({tasks: updatedTasks});
    this.updateLocalStorage(updatedTasks);
  }

  removeTask(text) {
    var updatedTasks = this.state.tasks;
    updatedTasks.splice(updatedTasks.indexOf(text), 1);
    this.setState({tasks: updatedTasks})
    this.updateLocalStorage(updatedTasks);
  }

  updateLocalStorage(updatedTasks) {
    console.log("tasks updated");
    localStorage.setItem('storedTasks', JSON.stringify(updatedTasks));
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
          <TodoAppList tasks={this.state.tasks} remove={this.removeTask} />
        </p>
      </div>
    );
  }
}

//export default App;
