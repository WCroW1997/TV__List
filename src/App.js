import './App.css';
import React, { Component } from 'react'
import Header from './Components/Header';
import Banner from './Components/Banner';
import PopularList from './Components/PopularList';

export class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Banner/>
        <PopularList/>
      </div>
    )
  }
}

export default App;