import { Col, Container, Row } from "react-bootstrap";
import "./MovieCanvas.css";
import MovieTile from "../MovieTile/MovieTile";
import { useQuery } from "react-query";
import { Movies } from "../../../entities/Moveis";
import axios from "axios";

const MovieCanvas = () => {
  const getMovies = async () => {
    const response = await axios.get("http://localhost:8080/movies");
    const data = await response.data;
    return data;
  };
  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => getMovies(),
    queryKey: ["movies"],
  });

  if (isError) {
    return <p>Error fetching Movie data!</p>;
  }

  if (isLoading) {
    return <p>Movie data is loading.</p>;
  }

  return (
    <Container className="canvas-bg" fluid>
      <Row className="justify-content-md-center">
        {movies?.map((movie: Movies) => {
          return (
            <Col key={movie.movieid} className="col-height">
              <MovieTile
                imgSrc={movie.src}
                cardTitle={movie.name}
                cardText={movie.summary}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default MovieCanvas;
