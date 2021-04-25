import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export class CountriesList extends Component {
  render() {
    return (
      <div className="countriesBlock__global">
        <h1>Números por Países</h1>

        <Link to="/paises">Lista de países</Link>
      </div>
    );
  }
}

export default CountriesList;