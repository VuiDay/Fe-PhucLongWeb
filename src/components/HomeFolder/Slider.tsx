import React, { SetStateAction, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider from '../../assets/Picture/Slider/6247661a4f0c02-gdn125kosmanthus_1920576old.png'
import slider1 from '../../assets/Picture/Slider/8193dee7c09690-z4625076372031_3b19bd81133a1823a15ec7b67088fa15 (1).jpg'
import slider2 from '../../assets/Picture/Slider/8193dee7c09690-z4625076372031_3b19bd81133a1823a15ec7b67088fa15.jpg'

export default function Slider() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setIndex(selectedIndex);
  };
  const sliderImg: React.CSSProperties = {
    width: '100%',
    height: '577px',
    position: 'relative',
    overflow: 'hidden'
  }
  const sliderChild: React.CSSProperties = {
    position: 'absolute',
    bottom: 0
  }
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div style={sliderImg}>
            <img style={sliderChild} src={slider} alt="" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={sliderImg}>
            <img style={sliderChild} src={slider1} alt="" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={sliderImg}>
            <img style={sliderChild} src={slider2} alt="" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
