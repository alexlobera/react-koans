import React from 'react';
import { mount, shallow} from 'enzyme';
import Nav from '../app/components/Nav';
import TodoList from '../app/components/TodoList';
import * as api from "../app/api/index";
import sinon from 'sinon';

describe('Nav component', () => {
    it('should navitate to / when clicking the home page link', () => {
      const router = { push: sinon.spy() };
      // Hint:
      // In the app/components/Nav the router is injected using the Nav.contextTypes = {
      //    router: React.PropTypes.object.isRequired,
      // };
      // That's called dependency injection and it makes it easier to test the component now.
      // The test is broken now, you need to fix it by injecting the CONTEXT
      // To fix it you  must inject the const router = { push: sinon.spy() }; we just created into the mount(<Nav />) above
      // Nore hints? check the https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
      const wrapper = shallow(
        <Nav />,
        { context: { router: router } }
      );
      wrapper.find('.home').simulate('click');
    })

    it('should navitate to /todos when clicking the todos link', () => {
      const router = { push: sinon.spy() };
      // Hint, you need to do 2 things:
      // 1. Inject the context like you did in the previous exercise 
      // 2. Shallow does not "mount"" the component and so it does not execute lifecycle methods, it doesn't create refs,...
      const wrapper = mount(
        <Nav />,
        { context: { router: router } }
      );
      // NOTE: refs are created when the component is mounted, that's why we need to use Enzyme's mount function.
      // Notice we need Jsdom in order to mount a component in the test environment (which is Node, not the browser)
      wrapper.ref('todos').simulate('click');
      sinon.assert.calledWith(router.push, '/todos');
    })
});

describe('TodoList component', () => {
    it('should fetch the todos of the current user', () => {
      // api/index.js is not injected into the TodoList, instead it's imported using the import syntax. 
      // So how do you "fake" it?
      // Hint: Use sinon stubs
      sinon
        .stub(api, 'getTodos')
        .returns(new Promise(()=>({})));
      const wrapper = mount(
        <TodoList userId="123"/>
      );
      sinon.assert.calledWith(api.getTodos, '123');
    })
});
