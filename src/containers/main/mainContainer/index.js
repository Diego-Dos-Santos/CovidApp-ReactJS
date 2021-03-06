import React, { Component } from "react";
import api from "../../../services/api";
import "./styles.css";
import CountriesList from "../countriesContainer";
import { TimelineLite } from "gsap/all";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.myTween = new TimelineLite();
    this.myElement = [];
    this.myConfirmed = [];
    this.myDeaths = [];
    this.state = { cases: [] };
  }

  componentDidMount() {
    this.loadGlobal();

    this.myTween.from(this.myElement, {
      duration: 1,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      delay: 1,
    });

    this.myTween.from(this.myConfirmed, {
      duration: 1,
      ease: "sine.out",
      opacity: 0,
      x: -40,
      stagger: 0.2,
      delay: 0.3,
    });

    this.myTween.from(this.myDeaths, {
      duration: 1,
      ease: "sine.out",
      opacity: 0,
      x: 40,
      stagger: 0.2,
      delay: 0.4,
    });
  }

  loadGlobal = async () => {
    const response = await api.get("/summary");

    this.setState({ cases: response.data.Global });
  };

  render() {
    const cases = this.state.cases;

    return (
      <div className="containerBlock">
        <div className="globalBlock">
          <h1 ref={(div) => (this.myElement = div)}>Global</h1>
          <div className="globalBlock__data">
            <div
              className="globalBlock__info block1"
              ref={(el) => (this.myConfirmed = el)}
            >
              <p>
                Nuevos confirmados{" "}
                <strong ref={(el) => (this.myNumbers = el)}>
                  {cases.NewConfirmed}
                </strong>
              </p>
              <p className="infoMedio">
                Nuevas muertes <strong>{cases.NewDeaths}</strong>
              </p>
              <p>
                Nuevos recuperados <strong>{cases.NewRecovered}</strong>
              </p>
            </div>
            <div
              className="globalBlock__info block2"
              ref={(el) => (this.myDeaths = el)}
            >
              <p>
                Muertes total <strong>{cases.TotalDeaths}</strong>
              </p>
              <p className="infoMedio">
                Total confirmados <strong>{cases.TotalConfirmed}</strong>
              </p>
              <p>
                Recuperados total <strong>{cases.TotalRecovered}</strong>
              </p>
            </div>
          </div>
        </div>

        <CountriesList />
      </div>
    );
  }
}
