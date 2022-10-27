/* eslint-disable */
import React from 'react';
import SingleDiv from './SingleDiv';
import CalcDisplay from './CalcDisplay';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.buttonValues = [
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
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };


  }

  handleClick(value) {
    const afterCalc = calculate(this.state, value);
    console.log(afterCalc);
    this.setState(afterCalc);

  }

  render() {
    let displayValue = '0';
    const { total, next } = this.state;

    if (next){
      displayValue = next;
    } else {
      if(total === null){
        displayValue = '0';
      } else {
        displayValue = total;
      }
    }
    return (
      <div id="calculator">
        <CalcDisplay key="display" name={displayValue} classy="gray displayCalculator" />
        {this.buttonValues.map((item) => (
          <SingleDiv
            key={item.id}
            name={item.value}
            classy={item.classy}
            handleClick={this.handleClick}
          />
        ))}

      </div>
    );
  }
}

export default Calculator;
