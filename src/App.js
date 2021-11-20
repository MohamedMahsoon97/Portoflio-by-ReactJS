import React, { Component } from 'react';
import {BrowserRouter} from "react-router-dom";
import {axios} from "axios";
import Intro from './Components/Intro/Intro';
import About from './Components/About/About';
import ProductList from './Components/Product-list/ProductList';
import Contact from './Components/Contact/Contact';
import { ToggleMode } from './Components/Toggle-mode/ToggleMode';

class App extends Component {
  render() {
    return (
      <div>
          <ToggleMode />
          <Intro />
          <About />
          <ProductList />
          <Contact />
      </div>
    )
  }
}
export default App;