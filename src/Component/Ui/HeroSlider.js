import React from 'react';
import { Container } from 'reactstrap';
import Slider from 'react-slick';
import{Link} from 'react-router-dom'
import '../../style/slider.css'

const HeroSlider = () => {
    const settings={
        fade:true,
        speed: 2000,
        autoplaySpeed:3000,
        infinite: true,
        autoplay: true,
        slidesToShow:1,
        slidesToScroll:1,
        pauseOnHover:true
    }
  return (
    <Slider {...settings} className="hero_slider">
    <div className='slider_item slider_item-01 mt-0'>
        <Container>
            <div className='slider_content'>
                <h6 className='text=light mb-3'>For Rent $70 per Day</h6>
                <h1 className='test-light mb-4'>Reseve now and get 50% off</h1>
                <button className='btn reserve_btn mt-4'>
                    <Link to='/carlist'>Reserve Now</Link>
                </button>
            </div>
        </Container>
    </div>
    <div className='slider_item slider_item-02 mt-0'>
        <Container>
            <div className='slider_content'>
                <h6 className='text=light mb-3'>For Rent $70 per Day</h6>
                <h1 className='test-light mb-4'>Reseve now and get 50% off</h1>
                <button className='btn reserve_btn mt-4'>
                    <Link to='/carlist'>Reserve Now</Link>
                </button>
            </div>
        </Container>
    </div>
    <div className='slider_item slider_item-03 mt-0'>
        <Container>
            <div className='slider_content'>
                <h6 className='text=light mb-3'>For Rent $70 per Day</h6>
                <h1 className='test-light mb-4'>Reseve now and get 50% off</h1>
                <button className='btn reserve_btn mt-4'>
                    <Link to='/carlist'>Reserve Now</Link>
                </button>
            </div>
        </Container>
    </div>
</Slider>
  );
}

export default HeroSlider;
