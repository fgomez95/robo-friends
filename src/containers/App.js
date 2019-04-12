/* global fetch */
import React, { Component } from 'react';
import './App.css';
import Cards from '../components/Cards';
import SearchBox from '../components/SearchBox';
import { connect } from 'react-redux';
import { setSearchField } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    onSearch: (e) => dispatch(setSearchField(e.target.value))
  };
};

const mapStateToProps = state => {
  return {
    searchField: state.searchField,
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
      .then(result => this.setState({ robots: result }));
  }
  
  render() {
    const filterRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField);
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
