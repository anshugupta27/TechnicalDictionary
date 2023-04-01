import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Lottie from "react-lottie-player";

const CarouselComponent = ({ list }) => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1}>
          {list.map((item) => (
            <>
              <Lottie
                loop
                animationData={item.image}
                play
                style={{ width: 500, height: 600 }}
              />
              <Carousel.Caption>
                <h3>{item.text}</h3>
              </Carousel.Caption>
            </>
          ))}
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselComponent;
