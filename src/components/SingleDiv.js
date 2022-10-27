import React from 'react';
import PropTypes from 'prop-types';

class CalcButtons extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { handleClickP } = this.props;
    handleClickP(e.target.value);
  }

  render() {
    const { classy, name } = this.props;
    return (
      <button value={name} type="button" className={classy} onClick={this.handleClick}>
        {name}
      </button>
    );
  }
}
CalcButtons.propTypes = {
  name: PropTypes.string.isRequired,
  classy: PropTypes.string.isRequired,
  handleClickP: PropTypes.func.isRequired,
};
export default CalcButtons;
