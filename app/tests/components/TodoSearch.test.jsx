var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

//var TodoSearch = require('TodoSearch');
import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
  it('should Exist', () => {
    expect('TodoSearch').toExist();
  });

  it('should dispatch setSearchText on inut change', () => {
    var searchText = 'Dog';
    var spy = expect.createSpy();
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    };
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);
  });
  it('should dispatch TOGGLE_SHOW_COMPLETED  when checkbox checked', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(action);
  });


});
