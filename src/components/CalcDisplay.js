import React from 'react';
import PropTypes from 'prop-types';

class CalcDisplay extends React.PureComponent {
  render() {
    const { classy, name } = this.props;
    return <span className={classy}>{name}</span>;
  }
}
CalcDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  classy: PropTypes.string.isRequired,
};

export default CalcDisplay;
