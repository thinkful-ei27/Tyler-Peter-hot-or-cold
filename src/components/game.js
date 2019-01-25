import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    state = {
        currentGuess:'',
        guessList:[],
        secretAnswer: 0

    }

    generateAnswer(){
       this.setState({secretAnswer: Math.floor(Math.random()*100)+1})
    };

    submitGuess(guess){
        this.setState({currentGuess: guess})
        
    }

    render(){
    return (
        <div>
            <Header onNewGame={()=> {this.generateAnswer()}}/>
            <GuessSection getGuess={(e)=> {this.submitGuess(e)}}feedback="Make your guess!" />
            <GuessCount count={3} />
            <GuessList guesses={[10, 15, 25]} />
        </div>
    );
    }
}

