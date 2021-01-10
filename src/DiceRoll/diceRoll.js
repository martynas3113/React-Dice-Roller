import React, { Component } from 'react';
import Die from '../Dice/dice';
import './diceRoll.css'

class DiceRoll extends Component{
    static defaultProps ={}
    constructor(props){
    super(props)
    this.state = {die1: 1 , die2: 1 , isRolling: false};
    this.roll = this.roll.bind(this);
    
    }

    roll(){
        let array = [1,2,3,4,5,6]
        const randomDie1 = Math.floor(Math.random() *6);
        const randomDie2 = Math.floor(Math.random() *6);
        this.setState({die1:array[randomDie1],die2:array[randomDie2], isRolling:true});
         setTimeout(() => {
            this.setState({isRolling:false}) //After 1 second isRolling state return to false, button name changes and animation stops
        }, 1000);
    }
    
    render(){
        
        return(
            <div className="roll-container">
                <div className="dice-wrap">
                    <Die number={this.state.die1} wobble={this.state.isRolling} />
                    <Die number={this.state.die2} wobble={this.state.isRolling} />
                </div>
                <div className="roll-btn">
                <button onClick={this.roll} disabled={this.state.isRolling} >{this.state.isRolling ? 'Rolling...' : 'Roll a Dice'}</button>
                </div>
            </div>
        )
    }
}

export default DiceRoll