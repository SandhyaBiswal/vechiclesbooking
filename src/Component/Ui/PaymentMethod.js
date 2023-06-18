import React from 'react';
import masterCard from '../../assets/images/master-card.jpg'
import paypal from '../../assets/images/paypal.jpg'
import '../../style/paymentmethod.css'

const PaymentMethod = () => {
  return (
   <div>
    <div className='payment'>
        <label htmlFor='' className='d-flex align-items-center gap-2'>
            <input type='radio'></input>Direct Bank Transfer
        </label>
    </div>
    <div className='payment mt-3'>
        <label htmlFor='' className='d-flex align-items-center gap-2'>
            <input type='radio'></input>Cheque Payment
        </label>
    </div>
    <div className='payment mt-3 d-flex align-items-center justify-content-between'>
        <label htmlFor='' className='d-flex align-items-center gap-2'>
            <input type='radio'></input>Master Card
        </label>
        <img src={masterCard}></img>
    </div>
    <div className='payment mt-3 d-flex align-items-center justify-content-between'>
        <label htmlFor='' className='d-flex align-items-center gap-2'>
            <input type='radio'></input>Paypal
        </label>
        <img src={paypal}></img>
    </div>
    <div>
        <button>Reserve Now</button>
    </div>
   </div>
  );
}

export default PaymentMethod;
