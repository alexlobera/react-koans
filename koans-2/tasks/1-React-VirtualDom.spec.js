import TodoList,{ListItem} from '../../koans-1/tasks/2-React-TodoList-one-way-data-binding.js';
import React from "react";
import TestUtils from "react-addons-test-utils";
import { expect } from "chai";

describe("Virtual DOM test. React Compoment, React Instance and React Element:", () => {
  it("A React Element is an inmutable object. The virtual DOM is a tree of React Elements. TestUtils.createRenderer() returns a React Element.", () => {
      const renderer = TestUtils.createRenderer();
      let component_1 = renderer.render(<TodoList/>);
      let component_2 = renderer.render(<TodoList/>);
      
      expect(component_1).toBe(component_2);
      
      expect(JSON.stringify(component_1)).toNotBe(JSON.stringify(component_2));
      
      //We don't use an assertion library because it would give you too much clues and we want you to think ;)
      //What is a Symbol? https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol
      
      if ("Symbol(CHANGE THIS)" !== component_1['$$typeof'].toString()) {
        throw new Error("component_1['$$typeof'] value is not correct");
      }
      
      if ("CHANGE THIS" !== typeof(component_2)) {
        throw new Error("The typeof(component_2) value is not correct");
      }
  });
  
  it("React Elements do not implement any functionality.", () => {
      const renderer = TestUtils.createRenderer();
      let reactElement = renderer.render(<TodoList/>);
      
      if ("CHANGE THIS" !== typeof(reactElement.addItem)) {
        throw new Error("The typeof(reactElement.addItem) is not correct");
      }
  });
  
  it("TestUtils.renderIntoDocument should return a detached React Instance.", () => {
      let detachedComp_1 = TestUtils.renderIntoDocument(<TodoList/>);
      let detachedComp_2 = TestUtils.renderIntoDocument(<TodoList/>);
      
      if (detachedComp_1 === detachedComp_1) {
        throw new Error("Are you sure detachedComp_1 and detachedComp_2 are the same instance?");
      }
  });
  
  it("ReactDOM.render(...) should return the same React Instance for the same component (they are not detached).", () => {
      let component_1 = ReactDOM.render(<TodoList/>, document.getElementById('app'));
      let component_2 = ReactDOM.render(<TodoList/>, document.getElementById('app'));
      
      //Yes you've learnt that the verbose of the assertion library when there is an exception is quite useless
      //We'll show you how to avoid this in another koan
      expect(component_1).toNotBe(component_2);
  });
  
  it("A 'React Instance' is an instance of a React Component and so it has the component's functionality.", () => {
      
      let component = ReactDOM.render(<TodoList/>, document.getElementById('app'));
      
      if ("CHANGE THIS" !== typeof(component.addItem)) {
        throw new Error("The typeof(component.addItem) is not correct");
      }
  });
});