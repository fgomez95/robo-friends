/* global fetch */
import React, { Component } from 'react';
import './App.css';
import Cards from '../components/Cards';
import SearchBox from '../components/SearchBox';
import { connect } from 'react-redux';
import { setSearchField, getRobots } from '../actions';

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
  state = {
    robots: [],
    searchField: '',
  }
  
  componentDidMount(){
    this.props.onGetRobots();
  }
  
  render() {
    const filterRobots = this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField);
    });
    return (
      <div className="tc">
        <h1 className="bg-black color-name white">
          Robo Friends
        </h1>
        <SearchBox 
        onChangeHandler={this.props.onSearch}
        value={this.props.searchField}
        />
        <Cards 
        data={filterRobots}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
