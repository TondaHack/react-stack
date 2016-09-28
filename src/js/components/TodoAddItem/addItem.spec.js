import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import AddItem from './index.jsx';
import ReactDOM from 'react-dom';
import 'react-mdl/extra/material.js';

describe('Add Item', function () {

    beforeEach( function () {
        this.component = TestUtils.renderIntoDocument(<AddItem />);
        this.element = ReactDOM.findDOMNode(this.component);
    });

    it('renders without problems', function () {

        expect(this.component).toExist();
    });

    it('should be tagname DIV', function () {
        expect(this.element.tagName).toEqual('DIV');
    });

    it('Check add new item', function () {
        const methods = {
            add: function () { }
        };
        const listener = sinon.spy(methods, 'add');
        const component = TestUtils.renderIntoDocument(<AddItem add={methods.add} />);
        const  element= ReactDOM.findDOMNode(component).querySelector('input');
        const value = 'test-value';

        element.value = value;

        TestUtils.Simulate.change(element);
        expect(component.state.value).toEqual(value);

        TestUtils.Simulate.keyDown(element, {key: "w", keyCode: 119, which: 119});
        expect(listener.called).toNotEqual(true);

        TestUtils.Simulate.keyDown(element, {key: "Enter", keyCode: 13, which: 13});
        expect(listener.called).toEqual(true);

    });
});
