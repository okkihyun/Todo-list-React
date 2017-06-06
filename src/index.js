import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

var tasksList = ["Task 1", "Task 2", "Task 3"];

var tasks = localStorage.getItem('storedTasks');

if(tasks) {
  tasksList = JSON.parse(tasks);
}

ReactDOM.render(
  <App tasks={tasksList} />,
  document.getElementById('root')
);

registerServiceWorker();