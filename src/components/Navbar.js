import React from 'react';

class Navbar extends React.PureComponent {
  render() {
    return (
      <nav className="dFlex nav">
        <h1> Math Magicians </h1>
        <ul className="dFlex menu">
          <li>Home</li>
          <li>|</li>
          <li>Calculator</li>
          <li>|</li>
          <li>Quote</li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
