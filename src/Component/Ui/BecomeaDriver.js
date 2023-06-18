import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../style/becomedriver.css';
import driverImage from '../../assets/images/img8-removebg-preview.png'

const BecomeaDriver = () => {
  return (
    <section className='become_driver '>
      <Container>
        <Row>
            <Col lg='6' md='6' sm='12' className='become_driver-img'>
                <img src={driverImage} alt='' className='w-100 '></img>
            </Col>
            <Col lg='6' md='6' sm='12'>
                <h2 className='section_title become_driver-title mb-500'>
                    Do you want to Earn With Us? So Don't be Late
                </h2>

                <button className='btn become_driver-btn '>
                    Become a Driver
                </button>
            </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BecomeaDriver;
