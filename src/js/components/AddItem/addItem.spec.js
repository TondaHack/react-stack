
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import CloseButton from './index.jsx';
import ReactDOM from 'react-dom';

describe('Close Button', function () {
    it('renders without problems', function () {
        this.component = TestUtils.renderIntoDocument(<CloseButton />);
        this.element = ReactDOM.findDOMNode(this.component);
        expect(this.component).toExist();
    });
    //
    //
    // it('should contain class', function () {
    //     expect(this.element.className).toContain('btn-icon action-close btn btn-link');
    // });
    // //
    it('should be tagname A', function () {
        expect(this.element.tagName).toEqual('DIV');
    });

    it('Child should be tagname I', function () {
        expect(this.element.children[0].tagName).toEqual('INPUT');
    });
});
