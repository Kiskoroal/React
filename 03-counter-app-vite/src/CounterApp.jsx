import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ( {value} ) => {

    const [counter, setCounter] = useState(value);

    const click = () => {
      setCounter(counter + 1);  
    };

    const rest = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(value);
    }

    return(
        <div data-testid = 'test-counter'>
        <h1>Cookie Clicker</h1>
        <h2> {counter} </h2>

        <button onClick={ click }> +1 </button>
        <button onClick={ rest }> -1 </button>
        <button onClick={ reset }> Reset </button>
        </div>
    );
}

CounterApp.propTypes = {
    counter : PropTypes.number
};