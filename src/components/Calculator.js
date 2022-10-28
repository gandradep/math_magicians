import React, { useState } from 'react';
import SingleDiv from './SingleDiv';
import CalcDisplay from './CalcDisplay';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const buttonValues = [
    { id: 'ac', value: 'AC', classy: 'gray' },
    { id: 'plusMinus', value: '+/-', classy: 'gray' },
    { id: 'modulus', value: '%', classy: 'gray' },
    { id: 'divition', value: '÷', classy: 'orange' },
    { id: '7', value: '7', classy: 'gray' },
    { id: '8', value: '8', classy: 'gray' },
    { id: '9', value: '9', classy: 'gray' },
    { id: 'multiply', value: 'x', classy: 'orange' },
    { id: '4', value: '4', classy: 'gray' },
    { id: '5', value: '5', classy: 'gray' },
    { id: '6', value: '6', classy: 'gray' },
    { id: 'minus', value: '-', classy: 'orange' },
    { id: '1', value: '1', classy: 'gray' },
    { id: '2', value: '2', classy: 'gray' },
    { id: '3', value: '3', classy: 'gray' },
    { id: 'plus', value: '+', classy: 'orange' },
    { id: '0', value: '0', classy: 'gray zeroButton' },
    { id: 'decimal', value: '.', classy: 'gray' },
    { id: 'equal', value: '=', classy: 'gray' },
  ];

  const handleClick = (value) => {
    const afterCalc = calculate(state, value);
    setState(afterCalc);
  };
  let displayValue = '0';
  const { total, next } = state;

  if (next) {
    displayValue = next;
  } else if (total === null) {
    displayValue = '0';
  } else {
    displayValue = total;
  }

  return (
    <div id="calculator">
      <CalcDisplay key="display" name={displayValue} classy="gray displayCalculator" />
      {buttonValues.map((item) => (
        <SingleDiv
          key={item.id}
          name={item.value}
          classy={item.classy}
          handleClickP={handleClick}
        />
      ))}
    </div>
  );
};

export default Calculator;
