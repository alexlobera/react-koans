import React from "react";
import ReactDOM from "react-dom";
import TodoList from '../tasks/2-React-TodoList-one-way-data-binding.js';
import {ListItem} from '../tasks/2-React-TodoList-one-way-data-binding.js';
import TestUtils from "react-addons-test-utils";
import jsdomSetup from "../../test/jsdom-setup";
import expect from "expect";

describe("Create a ToDo List. A React intro to one-way data-binding ", () => {

  describe("Task #1 - display the new fields", () => {

    it('Should render required addItem button', () => {
      let detachedComp = TestUtils.renderIntoDocument(<TodoList/>);
      if (undefined === detachedComp.refs.addButton)
      {
        throw new Error("I can't find new item input");
      }
    });
    
    it('Should render the required input field', () => {
      let detachedComp = TestUtils.renderIntoDocument(<TodoList/>);
      if (undefined === detachedComp.refs.txt)
      {
        throw new Error("I can't find the input field");
      }
    });
  });
  
  describe("Task #2 - Implement the addTask functionality", () => {
        
    it('Should be possible to add a new task to list', () => {
      
      var detachedComp = TestUtils.renderIntoDocument(<TodoList/>);
      const newTask = "Learn more advance JavaScript too!";
      detachedComp.refs.txt.value = newTask;
      
      TestUtils.Simulate.click(detachedComp.refs.addButton);
      
      expect(detachedComp.state.tasks[1].name).toBe(newTask);
    });
  });
});
