import './App.css';
import React, { Component } from 'react'
import Header from './Components/Header';
import Banner from './Components/Banner';
// import PopularList from './Components/PopularList';
import Footer from './Components/Footer';
import MovieList from './Components/MovieList';
import apiConfig from './Api/apiConfig';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInfo: undefined
    };
  }

  componentDidMount(){
    const apiUrl = `${apiConfig.API_URL}${apiConfig.category[0]}/${apiConfig.popular}?api_key=${apiConfig.API_KEY}&language=en-US&page=1`
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => this.setState({
          movieInfo: data.results,
        }))
        
  }




  render() {
    return (
      <div>
        <Header/>
        <Banner/>
        <MovieList movieInfo={this.state.movieInfo}/>
        <Footer />
      </div>
    )
  }
}

export default App;