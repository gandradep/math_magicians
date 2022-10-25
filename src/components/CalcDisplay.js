import React from 'react';

class CalcDisplay extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <span className={this.props.class}>{this.props.name}</span>;
  }
}

export default CalcDisplay;
