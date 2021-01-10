
import React, { Component } from 'react';
import './dice.css'

class Die extends Component {
    constructor(props){
    super(props)
    }

convert(){
    const num = this.props.number;
    let dice = ''
    if(num === 1){
        dice = 'one';
    }
    if(num === 2){
        dice = 'two';
    }
    if(num === 3){
        dice = 'three';
    }
    if(num === 4){
        dice = 'four';
    }
    if(num === 5){
        dice = 'five';
    }
    if(num === 6){
        dice = 'six';
    }
    
    return dice;
}

render(){
    return(
        
        <div className="dice-container">
            <i className={this.props.wobble ? `fas fa-dice-${this.convert()} shake` : `fas fa-dice-${this.convert()}` }></i>
        </div>
    )
}
}
export default Die