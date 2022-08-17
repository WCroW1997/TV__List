import React, { Component } from "react";
import Card from "./Card";

export class PopularList extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="section__title">New</h2>
        <div className="film__list">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default PopularList;
