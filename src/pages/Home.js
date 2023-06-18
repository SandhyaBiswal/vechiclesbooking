import React from 'react';
import HeroSlider from '../Component/Ui/HeroSlider';
import Helmet from '../Component/Helmet/Helmet';
import { Container, Row,Col } from 'reactstrap';
import FindTruckForm from '../Component/Ui/FindTruckForm';
import About from '../Component/Ui/About';
import Services from '../Component/Ui/Services';
import truckData from '../assets/Data/truckData';
import TruckItem from '../Component/Ui/TruckItem';
import BecomeaDriver from '../Component/Ui/BecomeaDriver';
import Testimonials from '../Component/Ui/Testimonials';

const Home = () => {
  return (
    <Helmet title='Home'>
      {/* hero section */}
       <section className='p-0 hero_slider_section'>
       <HeroSlider></HeroSlider>

       <div className='hero_form'>
        <Container>
          <Row className='form_row'>
            <Col lg='4' md='4'>
              <div className='find_truck_left'>
                <h2>Find your best Truck here</h2>
              </div>
            </Col>

            <Col lg='8' md='8' sm='12'>
              <FindTruckForm></FindTruckForm>
            </Col>
          </Row>
        </Container>
       </div>
       </section>
       {/* About Section */}

       <About></About>
       {/* Service section */}
       <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-4 text-center'>
              <h6 className='section_subtitle'>See our</h6>
              <h2 className='section_title'>Popular Services</h2>
            </Col>
            <Services></Services>
          </Row>
        </Container>
       </section>
       {/* truck offer section */}

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h6 className='section_subtitle'>Come with</h6>
              <h2 className='section_title'>Hot Offers</h2>
            </Col>

            {
              truckData.slice(0, 6).map(item=>(
                <TruckItem item={item} key={item.id}/>
              ))
            }
          </Row>
        </Container>
      </section>
      {/* BecomeaDriver Section */}
      <BecomeaDriver></BecomeaDriver>

      {/* testimonials section */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section_subtitle ">Our clients says</h6>
              <h2 className="section_title">Testimonials</h2>
            </Col>

            <Testimonials />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Home;
