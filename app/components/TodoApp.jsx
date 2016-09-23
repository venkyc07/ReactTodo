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
            text: 'Do your Work',
            completed: false
          },
          {
            id: uuid(),
            text: 'Take a cup of milk',
            completed: true
          },
          {
            id: uuid(),
            text: 'Send a mail to nagesh',
            completed: true
          },
          {
            id: uuid(),
            text: 'Play video games',
            completed: false
          },
      ]
    };
  },
  handleToggle: function(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed =!todo.completed;
      }
      return todo;
    });
    this.setState({todos: updatedTodos});
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
          text: text,
          completed: false
        }
      ]
    });
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddtodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
