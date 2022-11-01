import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quote from './components/Quote';

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="content dFlex">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/quote" element={<Quote />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
