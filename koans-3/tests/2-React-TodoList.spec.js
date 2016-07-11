import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../tasks/2-React-TodoList-one-way-data-binding.js';
import sinon from 'sinon';

describe('Close button', () => {
    it('should navitate to home page', () => {
      const router = { push: sinon.spy() };
      const wrapper = shallow(
        <TodoList />,
        { context: { router: router } }
      );
      wrapper.find('.close.pull-left').simulate('click');
      sinon.assert.calledWith(router.push, '/');
    })
})
