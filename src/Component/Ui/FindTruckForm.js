import React from 'react';
import '../../style/findtruck.css';
import {Form, FormGroup} from 'reactstrap'

const FindTruckForm = () => {
  return (
    <Form className='form'>
        <div className='d-flex align-items-center justify-content-between flex-wrap'>
            <FormGroup className='form_group'>
                <input type='text' placeholder='From address' required></input>
            </FormGroup>
            <FormGroup className='form_group'>
                <input type='text' placeholder='To address' required></input>
            </FormGroup>
            <FormGroup className='form_group'>
                <input type='date' placeholder='Book Date' required></input>
            </FormGroup>
            <FormGroup className='form_group'>
                <input className='journey_time' type='time' placeholder='Book Time' required></input>
            </FormGroup>
            
            <FormGroup className='form_group'>
                <button className='btn find_truck-btn'>Find Truck</button>
            </FormGroup>
        </div>
    </Form>
  );
}

export default FindTruckForm;
