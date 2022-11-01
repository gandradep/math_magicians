import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.PureComponent {
  render() {
    return (
      <nav className="dFlex nav">
        <h1 className="fsizeBig fw400"> Math Magicians </h1>
        <ul className="dFlex menu fs175">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/quote">Quote</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
