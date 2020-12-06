import React, { Component } from 'react';
import api from '../../services/api';
import '../main/styles.css';
import { Link } from 'react-router-dom';

export default class Main extends Component {

    state = {
         cases: [],
    };

    componentDidMount(){
        this.loadGlobal();
    };

    loadGlobal = async () => {
        const response = await api.get('/summary')

        this.setState({ cases: response.data.Global})
    };

    render(){
        return (

            <div className="containerBlock">
                <div className="globalBlock">
                        <h1>Global</h1>
                        <div className="globalBlock__data">
                            <div className="globalBlock__info block1">
                                <p>Nuevos confirmados <strong>{this.state.cases.NewConfirmed}</strong></p>                           
                                <p className="infoMedio">Nuevas muertes <strong>{this.state.cases.NewDeaths}</strong></p>
                                <p>Nuevos recuperados <strong>{this.state.cases.NewRecovered}</strong></p>
                            </div>
                            <div className="globalBlock__info block2">
                                <p>Muertes total <strong>{this.state.cases.TotalDeaths}</strong></p>
                                <p className="infoMedio">Total confirmados <strong>{this.state.cases.TotalConfirmed}</strong></p> 
                                <p>Recuperados total <strong>{this.state.cases.TotalRecovered}</strong></p>
                            </div>
                        </div>
            </div>

                <div className="countriesBlock__global">
                    <h1>Números por Países</h1>

                    <Link to="/paises">Lista de países</Link>
                </div>
            </div>
        )
    }
}