import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter and other Router-related components

import NavbarComponent from "../SearchPage/NavbarComponent"
import FooterComponent from "../SearchPage/FooterComponent"

function SearchHome() {
  return (
    <div>
      <NavbarComponent />
      <FooterComponent />

    </div>

    
  );
}

export default SearchHome;
