import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter and other Router-related components

import NavbarComponent from "./NavbarComponent"
import FooterComponent from "./FooterComponent"

function DisplayTrainResults() {
  return (
    <div>
      <NavbarComponent />
      <FooterComponent />

    </div>

    
  );
}

export default DisplayTrainResults;
