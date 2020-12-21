import React, { Component } from 'react';
import './styles.css';
import { TimelineLite } from 'gsap/all';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.myTween = new TimelineLite();
        this.myElements = [];
    }

    componentDidMount(){
        this.myTween.from(this.myElements, {
            duration: 0.8,
            opacity: 0,
            y: -20,
            stagger: 0.2,
            delay: 0.5
          });
  
    }
    render(){
        return (
            <header id="main-header" ref={div => this.myElements = div}><span>COVID Countries</span></header>
        )
    }
}