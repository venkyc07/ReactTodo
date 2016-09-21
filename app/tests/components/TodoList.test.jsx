var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('should Exist', () => {
    expect(TodoList).toExist();
  });

  it('it should render one Todo Components for each  todo item', () => {
      var todos = [
        {
          id: 1,
          text: 'Do somthing'
        },
        {
          id: 2,
          text: 'Check Mail'
        }
    ];
    var todoList =  TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });

});
