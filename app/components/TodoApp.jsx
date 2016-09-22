var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
          {
            id: uuid(),
            text: 'Do your Work'
          },
          {
            id: uuid(),
            text: 'Take a cup of milk'
          },
          {
            id: uuid(),
            text: 'Send a mail to nagesh'
          },
          {
            id: uuid(),
            text: 'Play video games'
          },
      ]
    };
  },

  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },

  handleAddtodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    });
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddtodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
