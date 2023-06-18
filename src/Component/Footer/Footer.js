import React from 'react';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../style/footer.css'

const quickLinks=[
  {
    path:'/about',
    display:'About'
  },
  {
    path:'#',
    display:'Privacy Policy'
  },
  {
    path:'/trucklist',
    display:'TruckList'
  },
  {
    path:'/truckdetals',
    display:'TruckDetals'
  },
  {
    path:'/contact',
    display:'Contact'
  }
]
const date=new Date()
const year= date.getFullYear()
const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4' md='4' sm='1'>
          <div className='logo footer_logo'>
                <Link to='/home' className='d-flex align-items-center gap-3'>
                <i class="ri-truck-line"></i>
                <span>Rent Truck Service</span>
                  </Link>
              </div>

              <p className='footer_logo-content'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, 
              </p>
          </Col>

          
          <Col lg='2' md='4' sm='6'>
            <div className='mb-4'>
              <h5 className='footer_link-title'>Quick Links</h5>
              <ListGroup>

                {quickLinks.map((item,index)=>{
                  return<ListGroupItem key={index} className='p-0 mt-3 quick_link'>
                    <Link to={item.path} className=' '>{item.display}</Link>
                  </ListGroupItem>
                })}
              </ListGroup>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <div className='mb-4'>
              <h5 className='footer_link-title mb-4'>Head Office</h5>
              <p className='office_info'>123 Marahathali,Banglore, Karnataka</p>
              <p className='office_info'>Phone: +9923456756</p>
              <p className='office_info'>Email: sandhya@123gmail.com</p>
              <p className='office_info'>Office Time: 10am - 7pm</p>
            </div>
          </Col>
          <Col lg='3' md='4' sm='12'>
            <div className='mb-4'>
              <h5 className='footer_link-title'>Newsletter</h5>
              <p className='section_description'>Subscribe our newsletter</p>
            </div>
            <div className='newsletter'>
              <input type='email' placeholder='Email'></input>
              <span><i class="ri-send-plane-line"></i></span>
            </div>
          </Col>
          <Col lg='12'>
            <div className='footer_bottom'>
              <p className='section_description d-flex align-items-center justify-content-center gap-1 pt-4'>
              <i class="ri-copyright-line"></i>copyright {year}, Developed by Sandhya Biswal. All rights reserved
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      </footer>
  );
}

export default Footer;


