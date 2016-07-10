/*
import TodoList from '../tasks/1-React-TodoList-props-and-state.js';
import {ListItem} from '../tasks/1-React-TodoList-props-and-state.js';
import React from "react";
import { expect } from "chai";
import { mount } from 'enzyme';

describe("Create a ToDo List. A React intro to state and props", () => {

  describe("Task #1 - display a list of tasks", () => {

    const todoListWrapper = mount(<TodoList/>);

    it('The component should start with a ul tag elementsss', () => {
      const actual = todoListWrapper.find('ul');
      const expected = 1;
      expect(actual).to.be.length(expected);
    });
    
    it('There should be 2 elements in the list', () => {
      const actual = todoListWrapper.find('ul li').length;
      const expected = 2;
      expect(actual).to.be.equal(expected);
    });

    it('The taks component should pass the task as a parameter to the child component', () => {
      const actual = todoListWrapper.find(ListItem).first().props().task;
      expect(actual).not.to.be.equal(undefined);
    });
    it('The list item should render the task name', () => {
      const actual = todoListWrapper.find('ul li').first().text();
      const expected = "Learn more JavaScript";
      expect(actual).to.be.equal(expected);
    });
  });
});
*/