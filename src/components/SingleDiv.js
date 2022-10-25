/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

class SingleDiv extends React.PureComponent {
  constructor(props){
    super(props);
  }
  render() {
    return <button className={this.props.class}>{this.props.name}</button>;
  }
}
SingleDiv.propTypes = {
  name: PropTypes.string.isRequired,
};
export default SingleDiv;
