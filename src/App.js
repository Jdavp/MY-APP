import React, { Component }from 'react';
import './App.css';

import tasks from './sample/tasks.json'

// components
import Tasks from './components/Tasks'
import TaskForm from './components/TaskForm';
import Posts from  './components/Posts'

class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTask = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: newTask})
  }

  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    });
    this.setState({task: newTasks})
  }
  
  render() {
    return <div>
      <TaskForm addTask={this.addTask}/>
      <Tasks
        tasks={this.state.tasks}
        deleteTask={this.deleteTask}
        checkDone={this.checkDone}
        
        />
        <Posts/>
    </div>
  }
}

export default App;