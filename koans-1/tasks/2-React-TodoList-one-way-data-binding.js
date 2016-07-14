import React from "react";

// Users should be able to add tasks to the list.
// Task 1: Add the newTaskAddButton to the render and bind it to a the component method addTask
// Task 2: Implement the `addTask` method. This method should modify the `ToDoList`
// component's state. Changing the state will render this component and its child components. 
// Changes in the state must be explicit. That's called one-way data-binding

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { name: "Learn more advance React, it's awesome!" }
      ]
    };

    this.inputChanged = this.inputChanged.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  inputChanged(event) {
    //this method is just a hint of how you can implement the addTask function
    console.log(this.refs.txt.value);
  }

  // Task 2. Implement this method to add new tasks to the list
  addTask() {
    // You need to change this.state using this.setState({your new state}) otherwhise React doesn´t track your changes, 
    // in other words it doesn't re-render the task list
    let tasks = { tasks: [...this.state.tasks, { name: this.refs.txt.value }] };
    this.setState(tasks);
  }

  render() {
    let tasksComponents = this.state.tasks.map((task, index) => (
        <ListItem task={task} />)
    )
    let newTaskInput = <input ref="txt" type="text" onChange={this.inputChanged}/>;
    let newTaskAddButton = <button onClick={this.addTask}>Add new Product</button>;
  
    return (
      <div>
        <ul>
          {tasksComponents}
        </ul>
        {newTaskInput}
        {newTaskAddButton}
      </div>
    );
  }
}

export const ListItem = props => (
    <li>
        {props.task.name}
    </li>
)

export default TodoList;
