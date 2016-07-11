import React from "react";
import TodoList from '../tasks/2-React-TodoList-one-way-data-binding.js';
import { expect } from "chai";
import { mount } from 'enzyme';

describe("ToDo List. A React intro to one-way data-binding ", () => {
  describe("Task #1 - display the new fields", () => {
    const todoListWrapper = mount(<TodoList/>);
    it('Should render required addItem button', () => {
      const actual = todoListWrapper.find('button');
      const expected = 1;
      expect(actual).to.be.length(expected);
    });
    
    it('Should render the required input field', () => {
      const actual = todoListWrapper.find('input');
      const expected = 1;
      expect(actual).to.be.length(expected);
    });
  });
  
  describe("Task #2 - Implement the addTask functionality", () => {
    const todoListWrapper = mount(<TodoList/>);
    it('Should be possible to add a new task to the list by clicking on the button', () => {
      todoListWrapper.find('button').simulate('click');
      expect(todoListWrapper.find('ul li')).to.be.length(2);
    });
    it('Should be the name for the task and for the input', () => {
      const newTask = "Learn more advance JavaScript too!";
      todoListWrapper.find('input').get(0).value = newTask;
      todoListWrapper.find('button').simulate('click');
      expect(todoListWrapper.find('ul li').last().text()).to.be.equal(newTask);
    });
  });
});
