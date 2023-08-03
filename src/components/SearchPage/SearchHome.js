import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter and other Router-related components

import CardComponent from "./CardComponent";
import NavbarComponent from "./NavbarComponent"
import FooterComponent from "./FooterComponent"

function SearchHome() {
  return (
    <div>
      <NavbarComponent />
      <CardComponent />
      <FooterComponent />

    </div>

    
  );
}

export default SearchHome;
