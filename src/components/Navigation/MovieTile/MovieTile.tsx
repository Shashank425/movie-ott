import { Button, Card } from "react-bootstrap";
import "./MovieTile.css";

interface Props {
  imgSrc: string;
  cardTitle: string;
  cardText: string;
}

const MovieTile = ({ imgSrc, cardTitle, cardText }: Props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{cardText}</Card.Text>
        <Button variant="primary">Watch Movie</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieTile;
