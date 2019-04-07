/* global fetch */
import React, { Component } from 'react';
import './App.css';
import Cards from '../components/Cards';
import SearchBox from '../components/SearchBox';

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
  
  onChangeHandler = (e) => { 
    this.setState({ searchField: e.target.value }); 
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
        onChangeHandler={this.onChangeHandler}
        value={this.state.searchField}
        />
        <Cards 
        data={filterRobots}
        />
      </div>
    );
  }
}

export default App;
