var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');
//Load Function
//require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//app css
require('applicationStyles')

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
