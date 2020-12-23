import React, { Component } from 'react';
import '../countries/styles.css';
import api from '../../services/api';

export default class Countries extends Component {

    constructor(props){
      super(props)
      this.state = { paises: [] }
   };

   componentDidMount(){
       this.loadCountries();
   };

   loadCountries = async () => {
       const response = await api.get('/summary')

       this.setState({ paises: response.data.Countries })
   };
    render(){
        const paises = this.state.paises;

        return (
            <div className="countriesBlock">
                {paises.map(pais => (
                    <div className ="countryBlock" key={pais._id}>
                        <h2 className="nameCountry">{pais.Country}</h2>
                        <div className="globalBlock__data">
                            <div className="globalBlock__details">
                                <div><p>Nuevos confirmados</p></div>
                                <div><strong>{pais.NewConfirmed}</strong></div>
                            </div>                           
                            <div className="globalBlock__details">
                                <div><p>Nuevas muertes</p></div>
                                <div><strong>{pais.NewDeaths}</strong></div>
                            </div>
                            <div className="globalBlock__details">
                                <div><p>Nuevos recuperados</p></div>
                                <div><strong>{pais.NewRecovered}</strong></div>
                            </div>
                            <div className="globalBlock__details">
                                <div><p>Muertes total</p></div>
                                <div><strong>{pais.TotalDeaths}</strong></div>
                            </div>
                            <div className="globalBlock__details">
                                <div><p>Total confirmados</p></div>
                                <div><strong>{pais.TotalConfirmed}</strong></div>
                            </div>
                            <div className="globalBlock__details">
                                <div><p>Recuperados total</p></div>
                                <div><strong>{pais.TotalRecovered}</strong></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
};