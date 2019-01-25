import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    state = {
        currentGuess:'',
        guessList:[],
        secretAnswer: Math.floor(Math.random()*100)+1,
        feedBack: 'Make a guess!'

    }

    setFeedback() {
        const { currentGuess, secretAnswer, guessList } = this.state;
        console.log('currentGuess is ========', currentGuess);
        console.log('secretAnswer is ========', secretAnswer);


        // const difference = Math.abs(currentGuess - secretAnswer);
        let feedBack;
        // console.log('difference is ======:', difference);
        // if (guessList.includes(currentGuess)) {
        //     feedBack = 'You have already guessed that number';
        // } 
        // if (difference <= 10) {
        //     feedBack = 'You are hot!';
        // } else if (difference > 10 && difference < 20) {
        //     feedBack = 'You are getting warmer';
        // } else if (difference > 20) {
        //     feedBack = 'You are cold';
        // }
        
        return  feedBack;
    }

    handleNewGame(){
       this.setState({
           secretAnswer: Math.floor(Math.random()*100)+1,
           currentGuess: '',
           guessList: [],
           feedBack: 'Make a guess!'
        });
    };

    submitGuess(guess, feedBack){
        this.setState({
            currentGuess: guess,
            guessList: [...this.state.guessList, guess],
            feedBack
        });
    }

    render(){
    return (
        <div>
            <Header onNewGame={()=> {this.handleNewGame()}}/>
            <GuessSection 
                getGuess={(e)=> {this.submitGuess(e)}}
                feedback={this.state.feedBack}
                testAnswer={(e) => this.setFeedback(e)}
            />
            <GuessCount count={this.state.guessList.length} />
            <GuessList guesses={[...this.state.guessList]} />
        </div>
    );
    }
}

