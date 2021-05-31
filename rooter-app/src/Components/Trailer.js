
import React from "react";
import { Card } from "react-bootstrap";

const MovieTrailer = (props) => {
  return (
    <div className="Trailer">
      <Card className="text-center">
        <Card.Header>Watch The Trailer For: {props.Title}</Card.Header>
        <Card.Body>
          <Card.Title>{props.Title}</Card.Title>
          <Card.Text>
            {props.Trailer}
            <hr />
            <h5>Synopsis:</h5>
            <p>{props.Description}</p>
            <hr/>
            <h6> Rating : {props.Rating} </h6>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieTrailer;