import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    return (
        <form
            onSubmit={
                (e) => {
                    const inputValue = Number(e.target.children.item(0).value);
                    e.preventDefault();
                    props.getGuess(inputValue)
                    props.testAnswer(inputValue)
                }
            }>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};
