import React, { useState } from 'react';
import Question from './Question';
import Score from './Score';
import Timer from './Timer';

export default function Quiz() {
    // TODO: Add state to track score
    const [currentQuestion, setCurrentQuestion] = useState(null);
    // TODO: Add state to track current question

    return (
        <div>
            <Timer />
            <Question question={currentQuestion} />
            <Score />
        </div>
    );
}
