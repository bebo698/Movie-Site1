import React, { Component } from 'react';
import Heroslide from '../components/hero-slide/Heroslide';
import MovieList from "../components/movie-list/MovieList";
import { Link } from 'react-router-dom';
import { OutlineButton } from '../components/button/Button';
import {category,MovieType,tvType} from '../api/tmdbApi';
class home extends Component {
    render() {
        return (
                
                <>
                <Heroslide /><div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Now</h2>
                        <Link to="/movie">
                            <OutlineButton className="small" >View More</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={MovieType.popular} />
                </div>
            </div>
                 </>
        );
    }
}

export default home;