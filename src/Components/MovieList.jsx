import React, { Component } from "react";
import Card from "./Card";


export class MovieList extends Component {
  

  render() {
    return (
      <div>
        <div className="movieList__zone">
            
            {this.props.movieInfo && 
            this.props.movieInfo.map(el =>(
               <Card
               key={el.id}
               movie={el}
             /> 
            ))}
          
        </div>
      </div>
    );
  }
}

export default MovieList;
