import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Overdrive from "react-overdrive";

const Movie = props => {
    const { movie } = props;

    const POSTER_PATH = `http://image.tmdb.org/t/p/w154`;
    return (
        <Link to={`/${movie.id}`} className="text-center movie">
            <Overdrive id={`${movie.id}`}>
                <Poster
                    src={`${POSTER_PATH}${movie.poster_path}`}
                    alt={movie.title}
                />
            </Overdrive>
        </Link>
    );
};

export default Movie;

const Poster = styled.img`
    box-shadow: 0 0 2.5rem rgba(255, 255, 255, 0.2);
    border-radius: 10px;
`;
