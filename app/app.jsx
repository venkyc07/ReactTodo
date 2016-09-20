var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load Function
//require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//app css
require('applicationStyles')

ReactDOM.render(
<p>Boilerplate final</p>,
  document.getElementById('app')
);
