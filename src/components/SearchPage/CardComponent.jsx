import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Router, useNavigate } from 'react-router-dom';
import './CardComponent.css';

// src/components/SearchTrains.js

{/*
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Router, useNavigate } from 'react-router-dom';

import React, { useState } from 'react';
//import TrainDetails from './TrainDetails';

const CardComponent = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const navigate = useNavigate();

  const handleSubmit = () => {

    console.log("hello")
    // window.location.href='./displaytrains'
    navigate('/displaytrains')
  }

  return (
    <div>
      <h1>IRCTC - Train Search</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="source">Source</label>
        <input
          type="text"
          id="source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />

        <label htmlFor="destination">Destination</label>
        <input
          type="text"
          id="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />

        <label htmlFor="date">Date of Travel</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button type="submit">Search Trains</button>
      </form>

      {source && destination && date && <CardComponent source={source} destination={destination} date={date} />}
    </div>
  );
};

export default CardComponent;
*/}

//////////////////////////////////////////




const CardComponent = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState('');

  const [source,setSource]=useState("") 
  const [destination,setDestination]=useState("") 
  const handleSubmit = (e) => {

    e.preventDefault()

    if(source && destination){
      navigate('/displaytrains');
    }
    else{
      alert("please enter valid values")
    }

    // console.log(source,destination)
    // window.location.href='./displaytrains'
    // navigate('/displaytrains');
  };

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 30); // Add 30 days to current date

    if (selectedDate < new Date() || selectedDate > currentDate) {
      // Date is invalid, you can show an error message or prevent form submission
      console.log('Invalid date');
    } else {
      setDate(e.target.value);
    }
  };

  // const [values, setValues] = useState({
  //   source: "",
  //   destination: ""
  // })


  // const {source, destination} = values;


  // const handleChange = (e) => {
    

    
  // }

  return (
    <div className='page-container'>
      <div className='card-container'>
        <Card>
          <Card.Body>
            <Card.Title>Travel Information</Card.Title>
            <Form >
              <Form.Group>
                <Form.Label>Source Place</Form.Label>
                <Form.Control id="source" type="text" placeholder="Enter source place" required onChange={(e) => setSource(e.target.value)} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Destination Place</Form.Label>
                <Form.Control id="destination" type="text" placeholder="Enter destination place" required onChange={(e) => setDestination(e.target.value)}/>
              </Form.Group>

              <Form.Group>
                <Form.Label>Enter Date of Travel</Form.Label>
                <Form.Control id="date" type="date" placeholder="Enter Date of Travel" value={date}
                  onChange={handleDateChange} required />
              </Form.Group>

              <Form.Group>
                <Form.Label>Are you a Senior Citizen</Form.Label>
                <div>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    name="SeniorCitizen"
                    id="SeniorCitizenYes"
                    value="yes"
                    required
                  />
                  <Form.Check
                    type="radio"
                    label="No"
                    name="SeniorCitizen"
                    id="SeniorCitizenNo"
                    value="no"
                    
                  />
                </div>
              </Form.Group>

              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
              

            </Form>

            

          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CardComponent;
