import React from 'react';
import PropTypes from 'prop-types';

class SingleDiv extends React.PureComponent {
  render() {
    const { classy, name } = this.props;
    return <button type="button" className={classy}>{name}</button>;
  }
}
SingleDiv.propTypes = {
  name: PropTypes.string.isRequired,
  classy: PropTypes.string.isRequired,
};
export default SingleDiv;
