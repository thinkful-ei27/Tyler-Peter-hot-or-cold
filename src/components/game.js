import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import InfoModal from './info-modal';

export default class Game extends React.Component {
    state = {
        currentGuess:'',
        guessList:[],
        secretAnswer: Math.floor(Math.random()*100)+1,
        feedBack: 'Make a guess!',
        showingDirections: false
    }

    setFeedback(currentGuess) {
        const { secretAnswer, guessList } = this.state;
        
        // const currentGuess = inputValue
        const difference = Math.abs(currentGuess - secretAnswer);
        let feedBack;
        
        if(difference === 0){
            feedBack = 'You Win!!!!!!!!!!'
        }
        else if (guessList.includes(currentGuess)) {
            console.log(currentGuess)
            feedBack = 'You have already guessed that number';
        } 
        else if(isNaN(currentGuess)){
            feedBack = 'please enter a number'
        }
        else if(currentGuess <= 0 || currentGuess >100){
            feedBack = 'please select a number between 1 and 100'
        }
        else if(difference <= 10) {
            feedBack = 'You are hot!';
        } else if (difference > 10 && difference < 20) {
            feedBack = 'You are getting warmer';
        } else if (difference >= 20) {
            feedBack = 'You are cold';
        } 
        
        this.setState({feedBack});
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
        if(isNaN(guess)){
            return
        }
        else if(guess > 100 || guess <= 0){
            return
        }
        else(
        this.setState({
            currentGuess: guess,
            guessList: [...this.state.guessList, guess],
            feedBack
        })
        );
    }

    toggleDirections(){
        this.setState({showingDirections: !this.state.showingDirections})
    }


    render(){
    return (
        <div>
            <Header onNewGame={()=> {this.handleNewGame()}} onToggle ={()=>this.toggleDirections()}/>
            <GuessSection 
                getGuess={(e)=> {this.submitGuess(e)}}
                feedback={this.state.feedBack}
                testAnswer={(e) => this.setFeedback(e)}
            />
            <GuessCount count={this.state.guessList.length} />
            <GuessList guesses={[...this.state.guessList]} />
            {this.state.showingDirections ?<InfoModal onToggle ={()=>this.toggleDirections()}  />: null}
        </div>
    );
    }
}

