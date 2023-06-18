import React from 'react';
import '../../style/service.css';
import {Col} from 'reactstrap';
import serviceData from '../../assets/Data/serviceData';

const Services = () => {
  return (
    <>
    {serviceData.map(item=>(
        <ServiceItem item={item} key={item.id}></ServiceItem>
    ))}
    </>
  );
}
const ServiceItem=({item})=>(
    <Col lg='4' md='4' sm='6' className='mb-3'>
        <div className='service_item mb-3'>
            <span className='mb-3 d-inline-block'>
                <i class={item.icon}></i>
            </span>
            <h6>{item.title}</h6>
            <p className='section_description text-black'>{item.desc}</p>
        </div>
    </Col>
)

export default Services;
