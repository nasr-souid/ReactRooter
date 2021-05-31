import { Card } from "react-bootstrap";
import {Link} from "react-router-dom";

import Stars from "./Stars";

const MovieCard = (props) => {
	return (
    <div className="MovieCard">
		<Card style={{ width: '18rem' }}>
			<Card.Img variant="top" src={props.movie.Poster} className="poster" alt='movie'/>
			<Card.Body>
			<Link to={`/Description/${props.movie.imdbID}`}>{props.movie.Title}</Link>
				<Card.Text> {props.movie.Year}</Card.Text>
				<Card.Text> {props.movie.rating}</Card.Text>
				<Stars/>
				</Card.Body>
	 	</Card>
    </div>
  );
};
export default MovieCard
