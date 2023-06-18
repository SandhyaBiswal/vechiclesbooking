import React from 'react';
import {Container, Row, Col} from 'reactstrap'
import Helmet from '../Component/Helmet/Helmet';
import CommonSection from '../Component/Ui/CommonSection';
import TruckItem from '../Component/Ui/TruckItem';
import truckData from '../assets/Data/truckData';

const Trucklist = () => {
  return( <Helmet title='Trucks'>
    <CommonSection title='Truck Listing'></CommonSection>
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <div className='d-flex align-items-center gap-3 mt-5 mb-5'>
              <span className='d-flex align-items-center gap-2'><i class="ri-sort-asc"></i>Sort By</span>
              <select>
                <option>Select</option>
                <option value='low'>Low to High</option>
                <option value='high'>High to Low</option>
              </select>
            </div>
          </Col>

          {
            truckData.map((item)=>(
              <TruckItem item={item} key={item.id}></TruckItem>
            ))
          }
        </Row>
      </Container>
    </section>
  </Helmet>
  );
}

export default Trucklist;
