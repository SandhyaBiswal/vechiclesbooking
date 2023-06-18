import React from 'react';
import CommonSection from '../Component/Ui/CommonSection';
import Helmet from '../Component/Helmet/Helmet';
import About from '../Component/Ui/About';
import {Container, Row, Col} from 'reactstrap' 
import BecommeaDriver from '../Component/Ui/BecomeaDriver'
import truckingtrends from '../assets/images/truckingtrends.jpg'
import '../style/aboutpage.css'
import OurMembers from '../Component/Ui/OurMembers';



const AboutPage = () => {
  return (
    <Helmet title='About'>
        <CommonSection title='About'></CommonSection>
        <About aboutClass='about'></About>
        <section className='about_page-section'>
          <Container>
            <Row>
              <Col lg='6' md='6' sm='12'>
                <div className='about_page-img'>
                  <img src={truckingtrends} alt='' className='w-100 rounded-3'></img>
                </div>
              </Col>
              <Col lg='6' md='6' sm='12'>
                <div className='about_page-content'>
                  <h2 className='section_title'>We are commited To Provide Safe Solutions</h2>
                  <p className='section_description text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim venianostrud 
                 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                 <p className='section_description text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim venianostrud 
                 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                 <div className='d-flex align-items-center gap-3 mt-4'>
                  <span className='fs-4'><i class="ri-phone-line"></i></span>
                 <div>
                     <h6 className='section_subtitle'>Need Any Help?</h6>
                     <h4>+0012345678</h4>
                 </div>
                 </div>
                 </div>
                </Col>
            </Row>
          </Container>
        </section>
        <BecommeaDriver></BecommeaDriver>
        <section>
          <Container>
            <Row>
              <Col lg='12' className='mb-5 text-center'>
                <h6 className='section_subtitle'>Experties</h6>
                <h2 className='section_title'>Our Members</h2>
              </Col>
              <OurMembers></OurMembers>
            </Row>
          </Container>
        </section>
    </Helmet>
  );
}

export default AboutPage;
