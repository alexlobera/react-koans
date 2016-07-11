import TodoList,{ListItem} from '../../koans-1/tasks/2-React-TodoList-one-way-data-binding.js';
import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import { expect } from "chai";

describe("Virtual DOM test. React Compoment, React Instance and React Element:", () => {
  
  it("JsX creates React Elements.", () => {
      let am_I_a_component = <TodoList/>;
      
      // assertion 1
      let change_me = 'WHAT TYPE AM I?';
      //using an assertion library would give you many clues about the problem, it woudl be too easy, that's why we are throwing an Error instead
      if (`Symbol(${change_me})` !== am_I_a_component['$$typeof'].toString()) {
        throw new Error("Assertion 3. am_I_a_component['$$typeof'] value is not correct");
      }

      // assertion 2
      if ('???' == typeof am_I_a_component) {
        throw new Error("Assertion 4. The typeof am_I_a_component value is not correct");
      }
  });

  it("JsX creates new objects every time.", () => {
      let component_1 = <TodoList/>;
      let component_2 = <TodoList/>;
      
      // assertion 1
      expect(component_1).not.to.be.deep.equal(component_2);
      
      // assertion 2
      expect(component_1).to.be.equal(component_2);
  });

  it("React Elements do not implement component's functionality.", () => {
      let reactElement = <TodoList/>;
      if ('CHANGE THIS' !== typeof reactElement.addTask) {
        throw new Error("The typeof(reactElement.addTask) is not correct");
      }
  });
  
  it("Rendering into the document should return a React Instance.", () => {
      let component = TestUtils.renderIntoDocument(<TodoList/>);
      if ('CHANGE THIS' !== typeof component.addTask) {
        throw new Error("The typeof(reactElement.addTask) is not correct");
      }
  });

  it("TestUtils.renderIntoDocument should return a detached React Instance.", () => {
      let detachedComp_1 = TestUtils.renderIntoDocument(<TodoList/>);
      let detachedComp_2 = TestUtils.renderIntoDocument(<TodoList/>);
      
      if (detachedComp_1 === detachedComp_1) {
        throw new Error("Are you sure detachedComp_1 and detachedComp_2 are the same instance?");
      }
  });
  
  it("ReactDOM.render should return the same React Instance for the same component (they are not detached).", () => {
      let component_1 = ReactDOM.render(<TodoList/>, document.getElementById('app'));
      let component_2 = ReactDOM.render(<TodoList/>, document.getElementById('app'));
      
      if (component_1 === component_2) {
        throw new Error("Are you sure component_1 and component_2 are the same instance?");
      }
  });
});
