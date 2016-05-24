import React from "react";

// Task: Fill the `return` of `TodoList` class. 
// It should return a list of `ListItem`. You need to display the task name.

// Tip: When building components you should minimize the state your components have.
// Minimize the state in your components and get the data  using props from parent components whenever possible.
// In the example ListItems shouldn't have state
class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [ { name: "Learn more JavaScript" },
               { name: "Learn more testing too!" }
             ]
    };
  }

  render() {
    // Properties can pass data to React components. The sintax is similar to HTML elements' attributs.
    // Below you can see how to pass data to a child component using a 'task' property
    let tasksComponents = this.state.tasks.map( task => (
        <ListItem
            task={task}
        />)
    )

    // Hint: Don't forget to wrap it with an `ul` element
    return (
      <div>
        // Write your code here
      </div>
    );
  }
}

// Render task name from the component's properties.
// Don't you know how?  Some key words: interpolate react props
export const ListItem = props =>(
    <li>
        // Write your code here
    </li>
);

export default TodoList;
