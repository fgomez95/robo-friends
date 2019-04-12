/* global fetch */
import React, { Component } from 'react';
import './App.css';
import Cards from '../components/Cards';
import SearchBox from '../components/SearchBox';
import { connect } from 'react-redux';
import { setSearchField, setRobots } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    onSearch: (e) => dispatch(setSearchField(e.target.value)),
    onSetRobots: (data) => dispatch(setRobots(data))
  };
};

const mapStateToProps = state => {
  return {
    searchField: state.searchField,
    robots: state.robots,
  };
};

class App extends Component {
  state = {
    robots: [],
    searchField: '',
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(result => this.props.onSetRobots(result));
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
