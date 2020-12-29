import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";
import { Link } from "react-router-dom";

function Movie({id,year,title,summary,poster,genres}){

    const ellipsis="...";
    var cleaned_title;
    var cleaned_summary;

    if (title.length > 20) {
        cleaned_title = title.substring(0,20)+ellipsis;
    } else {
        cleaned_title = title;
    }
    if (summary.length > 100) {
        cleaned_summary = summary.substring(0,100)+ellipsis;
    } else {
        cleaned_summary = summary;
    }


    return (
        <div className="movie">
        <Link
        to={{
            pathname:`movie/${id}`,
            state: {
                year,
                title,
                summary,
                poster,
                genres
            }
        }}
        >
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{cleaned_title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                {genres.slice(0,3).map((genre, index) => {
                    return <li key="index" className="genres__genre">{genre}</li>
                })}
                </ul>
                <p className="movie__summary">{cleaned_summary}</p>
            </div>
        </Link>
        </div>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
