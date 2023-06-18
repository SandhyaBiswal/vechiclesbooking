import React from 'react';
import{Container, Row, Col} from 'reactstrap'
import '../../style/about.css';
import images from '../../assets/images/flat-design-transport-truck-delivery_23-2149146360.avif'


const About = ({aboutClass}) => {
  return (
    <section className='about_section' style={aboutClass === 'about' ?{marginTop:'0px'}:{marginTop:'280px'}}>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className='about_section-content'>
                        <h4 className='section_subtitle '>About Us</h4>
                        <h2 className='section_title'>Welcome to Truck Book Service</h2>
                        <p className='section_description text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                         </p>

                         <div className='about_section-item d-flex align-items-center'>
                           <p className='section_description d-flex align-items-center gap-2 text-black'>
                           <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet
                           </p>

                           <p className='section_description d-flex align-items-center gap-2 text-black'>
                           <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet
                           </p>
                         </div>
                    </div>

                    <div className='about_section-item d-flex align-items-center'>
                        <p className='section_description d-flex align-items-center gap-2 text-black'>
                        <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet
                        </p>
                        <p className='section_description d-flex align-items-center gap-2 text-black'>
                        <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet
                        </p>
                    </div>
                    
                </Col>
                <Col lg='6' md='6'>
                    <div className='about_img'>
                        <img src={images}></img>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
}

export default About;
