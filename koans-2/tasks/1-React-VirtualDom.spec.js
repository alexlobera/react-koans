import TodoList,{ListItem} from '../../koans-1/tasks/2-React-TodoList-one-way-data-binding.js';
import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import { expect } from "chai";

describe("Virtual DOM test. React Compoment, React Instance and React Element:", () => {
  
  it("JsX creates React Elements.", () => {
    let am_I_a_component = <TodoList/>;
    
    // change this var
    let change_me = '????';

    // hint, uncomment next line to see the object in the console:
    // console.log(am_I_a_component);

    expect(`Symbol(${change_me})`).to.be.equal(am_I_a_component['$$typeof'].toString());
  });

  it("JsX creates new objects every time.", () => {
    let component_1 = <TodoList/>;
    let component_2 = <TodoList/>;
    
    // change this assertion, are the two React Elements deeply equal?
    expect(component_1).not.to.be.deep.equal(component_2);
  });

  it("React Elements do not implement component's functionality.", () => {
    let reactElement = <TodoList/>;

    // hint, uncomment next line to see the object in the console:
    // console.log('--------->',reactElement);

    //An assertion library would give you many clues and it would be too easy, that's why we are throwing an Error with a custome message instead
    if ('CHANGE THIS' !== typeof reactElement.addTask) {
      throw new Error("The typeof(reactElement.addTask) is not correct");
    }
  });
  
  it("Rendering into the document should return a React Instance.", () => {
    let component = TestUtils.renderIntoDocument(<TodoList/>);

    // hint, uncomment next line to see the object in the console:
    // console.log('--------->',component);

    // An assertion library would give you many clues and it would be too easy, that's why we are throwing an Error with a custome message instead
    // Change the following condition
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
