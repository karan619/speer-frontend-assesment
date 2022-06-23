import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { ProjectData } from "../data/projectData";
import "../style/Slider.css";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Container>
        <Carousel fade activeIndex={index} onSelect={handleSelect}>
          {ProjectData.length > 0 &&
            ProjectData.map((item) => (
              <Carousel.Item key={item.id}>
                <img
                  className=" slider__image"
                  src={item.image}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <p className="slider__text">{item.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
        </Carousel>
      </Container>
    </>
  );
};

export default Slider;
