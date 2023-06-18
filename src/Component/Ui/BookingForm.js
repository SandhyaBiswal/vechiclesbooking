import React from 'react';
import '../../style/bookingform.css'
import {Form, FormGroup} from 'reactstrap'

const BookingForm = () => {
  const submitHandler= event=>{
    event.preventDefault();
  }

  return (
    <Form onSubmit={submitHandler}>
        <FormGroup className='booking_form d-inline-block me-4 mb-4'>
            <input type='text' placeholder='First Name'></input>
        </FormGroup>
        <FormGroup className='booking_from d-inline-block ms-1 mb-4'>
            <input type='text' placeholder='Last Name'></input>
        </FormGroup>
        <FormGroup className='booking_form d-inline-block me-4 mb-4'>
            <input type='email' placeholder='Email id'></input>
        </FormGroup>
        <FormGroup className='booking_from d-inline-block ms-1 mb-4'>
            <input type='number' placeholder='Phone Number'></input>
        </FormGroup>
        <FormGroup className='booking_form d-inline-block me-4 mb-4'>
            <input type='text' placeholder='From Address'></input>
        </FormGroup>
        <FormGroup className='booking_from d-inline-block ms-1 mb-4'>
            <input type='text' placeholder='To Address'></input>
        </FormGroup>
        <FormGroup className='booking_form d-inline-block me-4 mb-4'>
            <select>
                <option value='Home Shift'>Home Shift</option>
                <option value='Office Shift'>Office Shift'</option>
                <option value='Goods delivery'>Goods delivery</option>
                <option value='Food delivert'>Food delivert</option>
            </select>
        </FormGroup>
        <FormGroup className='booking_form d-inline-block me-4 mb-4'>
            <input type='date' placeholder='Date'></input>
        </FormGroup>
        <FormGroup className='booking_from d-inline-block ms-1 mb-4'>
            <input type='time' placeholder='Time' className='time_picker'></input>
        </FormGroup>
        <FormGroup>
            <textarea rows={5} type='textarea' className='textarea' placeholder='write'></textarea>
        </FormGroup>

    </Form>
  );
}

export default BookingForm;
