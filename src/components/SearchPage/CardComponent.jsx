// src/components/CardComponent.js

import { Dropdown } from 'bootstrap';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Router, useNavigate } from 'react-router-dom';

const CardComponent = () => {
const navigate=useNavigate();

  const handleSubmit = ()=>{

    console.log("hello")
    // window.location.href='./displaytrains'
    navigate('/displaytrains')
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>Travel Information</Card.Title>
        <Form>
          <Form.Group>
            <Form.Label>Source Place</Form.Label>
            <Form.Control type="text" placeholder="Enter source place" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Destination Place</Form.Label>
            <Form.Control type="text" placeholder="Enter destination place" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Enter Date of Travel</Form.Label>
            <Form.Control type="date" placeholder="Enter Date of Travel" />
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
  );
};

export default CardComponent;
