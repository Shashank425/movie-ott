import { Col, Container, Row } from "react-bootstrap";
import "./MovieCanvas.css";
import MovieTile from "../MovieTile/MovieTile";

const MovieCanvas = () => {
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col>
          <MovieTile />
        </Col>
        <Col>
          <MovieTile />
        </Col>
        <Col>
          <MovieTile />
        </Col>
        <Col>
          <MovieTile />
        </Col>
        <Col>
          <MovieTile />
        </Col>
      </Row>
    </Container>
  );
};

export default MovieCanvas;
