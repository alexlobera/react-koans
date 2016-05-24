import TodoList from '../tasks/1-React-TodoList-props-and-state.js';
import {ListItem} from '../tasks/1-React-TodoList-props-and-state.js';
import React from "react";
import expect from "expect";
import expectJSX from "expect-jsx";
import TestUtils from "react-addons-test-utils";

expect.extend(expectJSX);

describe("Create a ToDo List. A React intro to state and props", () => {

  describe("Task #1 - display a list of tasks", () => {

    it('The component should start with a ul tag element', () => {
      const renderer = TestUtils.createRenderer();
      const actual = renderer.render(<TodoList/>).props.children.type;
      const expected = "ul";
      expect(actual).toBe(expected);
    });
    
    it('There should be 2 elements in the list', () => {
      const renderer = TestUtils.createRenderer();
      console.log(renderer.render(<TodoList/>).props.children.props.children);
      const actual = renderer.render(<TodoList/>).props.children.props.children.length;
      const expected = 2;
      expect(actual).toBe(expected);
    });
    
    it('The taks component should pass the task as a parameter to the child component', () => {
      const renderer = TestUtils.createRenderer();
      const actual = renderer.render(<TodoList/>);
      const expected = "Learn more JavaScript";
      expect(actual).toIncludeJSX(expected);
    });
    
    it('The list item should render the task name', () => {
      const expected = "Learn more JavaScript";
      const renderer = TestUtils.createRenderer();
      const actual = renderer.render(<ListItem task={{name:expected}}/>);
      expect(actual).toIncludeJSX(expected);
    });
  });
});
