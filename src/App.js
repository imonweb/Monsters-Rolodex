import { Component } from 'react';


import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box-component';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      // .then((users) => console.log(users))
      .then((users) => this.setState( () => {
        return {monsters: users}
      },
      () => {

      }
      ))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  }

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
    <div className='App'>
      
      {/* {
        filteredMonsters.map((monster) => {
          return ( 
            <div key={monster.id}>
              <h1> {monster.name}</h1>
            </div>
          );
        })
      } */}
      <SearchBox 
        className='monsters-search-box'
        onChangeHandler={onSearchChange} 
        placehodler='search monsters'
      />
      <CardList monsters={filteredMonsters} /> 

 
    </div>
  );
  }
}

export default App;
