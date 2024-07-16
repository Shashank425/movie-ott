import { Button, Card } from "react-bootstrap";
import "./MovieTile.css";

const MovieTile = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="./godfather.jpg" />
      <Card.Body>
        <Card.Title>The Godfather</Card.Title>
        <Card.Text>
          Italian-American crime family of Don Vito Corleone (Marlon Brando).
          When the don's youngest son, Michael (Al Pacino), reluctantly joins
          the Mafia, he becomes involved in the inevitable cycle of violence and
          betrayal.
        </Card.Text>
        <Button variant="primary">Watch Movie</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieTile;
