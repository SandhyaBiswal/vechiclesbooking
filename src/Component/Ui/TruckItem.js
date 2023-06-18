import React from 'react';
import{Col} from 'reactstrap'
import{Link} from 'react-router-dom'
import '../../style/truckitem.css'


const TruckItem = (props) => {
    const {imgUrl, model,truckName, automatic,speed, price}=props.item


  return (
    <Col lg='4' md='4' sm='6' className='mb-6'>
        <div className='truck_item'>
            <div className='truck_img'>
                <img src={imgUrl} alt='' className='w-100'></img>
            </div>
            <div className='truck_item-content mt-4'>
               <h4 className='section_title text-center'>{truckName}</h4>
               <h6 className='rent_price text-center mt-'>{price}
               <span> / Day</span></h6>

               <div className='truck_item-info d-flex align-items-center 
                                   justify-content-between mt-3 mb-4'>
                   <span className='d-flex align-items-center gap-1'><i class="ri-truck-line"></i>{model}</span>
                   <span className='d-flex align-items-center gap-1'><i class="ri-settings-2-line"></i>{automatic}</span>
                   <span className='d-flex align-items-center gap-1'><i class="ri-timer-line"></i>{speed}</span>
               </div>
               <button className='truck_item-btn truck_btn-rent w-50'>
                <Link to={`/trucklist/${truckName}`}>Rent</Link>
               </button>
               <button className='truck_item-btn truck_btn-details w-50'>
                <Link to={`/trucklist/${truckName}`}>Details</Link>
               </button>
               
            </div>
        </div>
    </Col>
  );
}

export default TruckItem;
