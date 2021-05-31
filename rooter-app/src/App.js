import React, { useState} from "react"
import { Nav, Navbar } from "react-bootstrap";
import {Switch, Route, Link} from "react-router-dom";
import "./App.css";
import moviesData from './Components/MoviesData'
import MovieList from './Components/MovieList'
import AddList from "./Components/AddList";
import FilterList from './Components/FilterList'
import Trailer from './Components/Trailer'

const App = () => {
    //useState()
    const [movies, setMovieData] = useState(moviesData);
    const [SearchByName, setSearchByName] = useState("");
    const [SearchByRating, setSearchByRating] = useState(0)
    const filteredMovieName = (e) => {
    setSearchByName(e.target.value);
    };
    const filteredMovieRating = (e) => {
    setSearchByRating(e);
    };
    const Add = (NewMovie) => {
    setMovieData([...movies, NewMovie]);
    };
    return(
    <div className="App">
    <div className="Navbar">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="responsive-navbar-nav"> 
        <Link to="/">Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="responsive-navbar-nav">
        <Nav>
            <FilterList
            SearchByName={filteredMovieName}
            SearchByRating={filteredMovieRating}
            />
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
    <Switch>
    <Route exact path="/">
    <MovieList movie={movies} Name={SearchByName} Rating ={SearchByRating} />
    </Route>
    {movies.map(el=><Route path={`/Description/${el.imdbID}`}><Trailer
              Title={el.Title}
              Trailer={el.Trailer}
              Description={el.Description}
              Rating={el.Rating}
            />
            </Route>)}
    </Switch>
    <Nav.Link className="Added">
            <AddList Add={Add} />
    </Nav.Link>
    <footer>
    <hr/>
    <h5>MoviesApp-Star Wars @2021</h5>
    </footer>
</div>
    )
}
export default App
