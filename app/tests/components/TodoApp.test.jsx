var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should Exist', () => {
    expect('TodoApp').toExist();
  });

  it('should add todo to the todos state on handleAddtodo', () => {
    var todoText = 'Do your Work';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todo: []});
    todoApp.handleAddtodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

});
