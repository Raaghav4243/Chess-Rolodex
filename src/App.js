import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      chesss: [
        {
          name: 'Magnus Carlsen',
          email: 'magnuscarlsen@gmail.com',
          id: '1'
        },
        {
          name: 'Hikaru Nakamura',
          email: 'hikarunakamura@gmail.com',
          id: '2'
        },
        {
          name: 'Vishy Anand',
          email: 'vishy@gmail.com',
          id: '3'
        },
        {
          name: 'Vidit Gujarathi',
          email: 'vidit@gmail.com',
          id: '4'
        }
      ],
      searchField: ''
    };
  }

  //componentDidMount() {
    //fetch('https://jsonplaceholder.typicode.com/users')
      //.then(response => response.json())
      //.then(users => this.setState({ chesss: users }));
  //}

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { chesss, searchField } = this.state;
    const filteredchesss = chesss.filter(chess =>
      chess.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Chess Rolodex</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList chesss={filteredchesss} />
      </div>
    );
  }
}

export default App;
