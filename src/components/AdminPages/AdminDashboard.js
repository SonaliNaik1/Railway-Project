import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter and other Router-related components

import NavbarComponent from "./NavbarComponent"
import ShowTrains from "./ShowTrains"
import FooterComponent from "../SearchPage/FooterComponent"

function AdminDashboard() {
  return (
    <div>
       
      <NavbarComponent />
      <ShowTrains />
      <FooterComponent />

    </div>

    
  );
}

export default AdminDashboard;
