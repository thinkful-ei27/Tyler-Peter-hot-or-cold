import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm 
                getGuess={(e)=>{props.getGuess(e)}}
                testAnswer={(e) => props.testAnswer(e)}
            />
        </section>
    );
}

