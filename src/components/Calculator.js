import React from 'react';
import SingleDiv from './SingleDiv';
import CalcDisplay from './CalcDisplay';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    // this.buttonValues = [
    //   'AC', '+/-', '%', '',
    //   '7', '8', '9', 'x',
    //   '4', '5', '6', '-',
    //   '1', '2', '3', '+',
    // ];
    this.buttonValues = [
      { id: 'ac', value: 'AC', class: 'gray' },
      { id: 'plusMinus', value: '+/-', class: 'gray' },
      { id: 'modulus', value: '%', class: 'gray' },
      { id: 'divition', value: '÷', class: 'orange' },
      { id: '7', value: '7', class: 'gray' },
      { id: '8', value: '8', class: 'gray' },
      { id: '9', value: '9', class: 'gray' },
      { id: 'multiply', value: 'x', class: 'orange' },
      { id: '4', value: '4', class: 'gray' },
      { id: '5', value: '5', class: 'gray' },
      { id: '6', value: '6', class: 'gray' },
      { id: 'minus', value: '-', class: 'orange' },
      { id: '1', value: '1', class: 'gray' },
      { id: '2', value: '2', class: 'gray' },
      { id: '3', value: '3', class: 'gray' },
      { id: 'plus', value: '+', class: 'orange' },
      { id: '0', value: '0', class: 'gray zeroButton' },
      { id: 'decimal', value: '.', class: 'gray' },
      { id: 'equal', value: '=', class: 'gray' },

    ];
  }

  render() {
    return (
      <div id="calculator">
        <CalcDisplay key="display" name="0" class="gray displayCalculator" />
        {this.buttonValues.map((item) => (
          <SingleDiv
            key={item.id}
            name={item.value}
            class={item.class}
          />
        ))}

      </div>
    );
  }
}

export default Calculator;
