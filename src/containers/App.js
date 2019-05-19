/* global fetch */
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setSearchField, getRobots } from '../actions';
import MainPage from '../components/MainPage';

const mapDispatchToProps = dispatch => {
  return {
    onSearch: (e) => dispatch(setSearchField(e.target.value)),
    onGetRobots: () => dispatch(getRobots())
  };
};

const mapStateToProps = state => {
  return {
    searchField: state.searchField,
    robots: state.robots,
    loading: state.loading,
    error: state.error,
    errorMessage: state.errorMessage
  };
};

class App extends Component {  
  render() {
    return (
      <MainPage {...this.props}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
