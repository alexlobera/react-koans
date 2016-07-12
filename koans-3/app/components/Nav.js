import React from "react";

class Nav extends React.Component {
  constructor() {
    super();
    this.navigateToTodoList = this.navigateToTodoList.bind(this);
    this.navigateToHomePage = this.navigateToHomePage.bind(this);
  }

  navigateToTodoList() {
    this.context.router.push('/todos');
  }

  navigateToHomePage() {
    this.context.router.push('/');
  }

  render() {
    return (
      <ul>
        <li>
          <a ref="todos" onClick={this.navigateToTodoList}>Todos</a>
        </li>
        <li>
          <a className="home" onClick={this.navigateToHomePage}>Todos</a>
        </li>
      </ul>
    );
  }
}

Nav.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default Nav;
