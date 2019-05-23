import React from 'react';
import Cards from './Cards';
import SearchBox from './SearchBox';

class MainPage extends React.Component {
  componentDidMount(){
    this.props.onGetRobots();
  }
  filterRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField);
    });
  }
  render(){
    const {
      searchField,
      onSearch
    } = this.props;
    
    return(
      <div className="tc">
        <h1 className="bg-black color-name white">
          Robo Friends
        </h1>
        <SearchBox 
          onChangeHandler={onSearch}
          value={searchField}
        />
        <Cards 
          data={this.filterRobots()}
        />
      </div>
    );
  }
}

export default MainPage;