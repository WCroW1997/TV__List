import React, { Component } from 'react'
// import apiConfig from '../Api/apiConfig'


export class Card extends Component {

    

  render() {
    return (
        <div className="card">
            <img src={'https://www.themoviedb.org/t/p/w500' + this.props.movie.poster_path} alt="" className="movie__poster"/>
            <h3 className="movie__title">{this.props.movie.title}</h3>
            <p className="movie__genre">{this.props.movie.vote_average}</p>
            <p className="movie__rates">{this.props.movie.vote_average}</p>
        </div>
    )
  }
}

export default Card