import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    return (
        <form
            onSubmit={
                (e) => {
                    const input = e.target.children.item(0);
                    e.preventDefault();
                    // props.getGuess(e.target.value)
                    props.getGuess(Number(input.value))
                }
            }>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};
// 

