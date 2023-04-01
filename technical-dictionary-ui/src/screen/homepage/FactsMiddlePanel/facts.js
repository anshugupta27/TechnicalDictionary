import React from "react";
import Carousel from "react-bootstrap/Carousel";
import coding from "./coding.json";
import coding2 from "./coding2.json";
import coding3 from "./coding3.json";
import Lottie from "react-lottie-player";

const Facts = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1}>
        <Lottie
          loop
          animationData={coding2}
          play
          style={{ width: 500, height: 600 }}
        />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1}>
        <Lottie
          loop
          animationData={coding}
          play
          style={{ width: 500, height: 600 }}
        />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1}>
        <Lottie
          loop
          animationData={coding3}
          play
          style={{ width: 500, height: 600 }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Facts;
