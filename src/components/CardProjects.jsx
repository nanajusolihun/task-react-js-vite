import { Card } from "react-bootstrap";

const CardProjects = (props) => {
  return (
    <div>
      <Card style={{ width: "20rem" }} className="shadow">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProjects;
