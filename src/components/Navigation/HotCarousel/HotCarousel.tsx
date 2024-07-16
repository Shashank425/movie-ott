import { Carousel } from "react-bootstrap";
import "./HotCarousel.css";

const HotCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="./interstellar.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Interstellar</h3>
          <p>
            In Earth's future, a global crop blight and second Dust Bowl are
            slowly rendering the planet uninhabitable. Professor Brand (Michael
            Caine), a brilliant NASA physicist, is working on plans to save
            mankind by transporting Earth's population to a new home via a
            wormhole.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="./inception.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Inception</h3>
          <p>
            Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to
            enter people's dreams and steal their secrets from their
            subconscious.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src="./avengers.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Avengers</h3>
          <p>
            When Thor's evil brother, Loki (Tom Hiddleston), gains access to the
            unlimited power of the energy cube called the Tesseract, Nick Fury
            (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero
            recruitment effort to defeat the unprecedented threat to Earth.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HotCarousel;
