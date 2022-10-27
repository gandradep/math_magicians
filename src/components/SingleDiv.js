/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

class SingleDiv extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleClick(e.target.value);
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
SingleDiv.propTypes = {
  name: PropTypes.string.isRequired,
  classy: PropTypes.string.isRequired,
};
export default SingleDiv;
