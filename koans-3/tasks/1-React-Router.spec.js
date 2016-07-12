import React from 'react';
import { mount, shallow} from 'enzyme';
import Nav from '../app/components/Nav';
import TodoList from '../app/components/TodoList';
import * as api from "../app/api/index";
import sinon from 'sinon';

describe('Nav component', () => {
    it('should navitate to / when clicking the home page link', () => {
      const router = { push: sinon.spy() };
      const wrapper = shallow(
        <Nav />
      );
      wrapper.find('.home').simulate('click');
    })

    it('should navitate to /todos when clicking the todos link', () => {
      const router = { push: sinon.spy() };
      const wrapper = mount(
        <Nav />
      );
      // don't change next line, you must use ref instead of find
      wrapper.ref('todos').simulate('click');
      sinon.assert.calledWith(router.push, '/todos');
    })
});

describe('TodoList component', () => {
    it('should fetch the todos of the current user', () => {
      const wrapper = shallow(
        <TodoList />
      );
      sinon.assert.calledWith(api.getTodos, '123');
    })
});
