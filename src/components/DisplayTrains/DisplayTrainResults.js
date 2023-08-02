import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter and other Router-related components

import NavbarComponent from "../SearchPage/NavbarComponent"
import TrainDetails from "./TrainDetails"
import FooterComponent from "../SearchPage/FooterComponent";

function DisplayTrainResults() {
  return (
    <div>
      <NavbarComponent />
      <TrainDetails />
      <FooterComponent />

    </div>

    
  );
}

export default DisplayTrainResults;
