
import { useState } from 'react';
import Ball from './Ball';

const App = () => {
    const [numbers, setNumbers] = useState([5, 11, 16, 23, 32]);

    const generateNumbers = () => {
        let newNumbers = [];
        while(newNumbers.length < 5){
            let r = Math.floor(Math.random() * 36) + 1;
            if(newNumbers.indexOf(r) === -1) newNumbers.push(r);
        }
        newNumbers.sort((a, b) => a - b);
        setNumbers(newNumbers);
    }
    return (
        <div>
            {numbers.map((number, index) => (
                <Ball key={index} number={number} />
            ))}
            <button onClick={generateNumbers}>New numbers</button>
        </div>
    );
}

export default App;