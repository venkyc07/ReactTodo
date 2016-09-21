var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
          {
            id: 1,
            text: 'Do your Work'
          },
          {
            id: 2,
            text: 'Take a cup of milk'
          },
          {
            id: 3,
            text: 'Send a mail to nagesh'
          },
          {
            id: 4,
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
    alert('new todo:' + text);
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
