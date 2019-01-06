import React, { Component } from "react";
import styled from "styled-components";
import Overdrive from "react-overdrive";

export default class MovieDetails extends Component {
    state = {
        movie: []
    };
    async componentDidMount() {
        const { id } = this.props.match.params;
        try {
            const res = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=d46d740097baa41a646508d9f42267b7&language=en-US`
            );
            const movie = await res.json();
            this.setState({
                movie
            });
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        const {
            id,
            title,
            overview,
            release_date,
            backdrop_path,
            poster_path
        } = this.state.movie;
        const BACKDROP_PATH = `http://image.tmdb.org/t/p/w1280`;
        const POSTER_PATH = `http://image.tmdb.org/t/p/w154`;
        return (
            <MovieWrapper
                className="text-center"
                backdrop={`${BACKDROP_PATH}${backdrop_path}`}
            >
                <MovieInfo>
                    <Overdrive id={`${id}`}>
                        <Poster
                            src={`${POSTER_PATH}${poster_path}`}
                            alt={title}
                        />
                    </Overdrive>
                    <div className="details">
                        <h1>
                            <span className="movie-name">Name: </span> {title}
                        </h1>
                        <h3>
                            <span className="movie-date">Release Date: </span>{" "}
                            {release_date}
                        </h3>
                        <p>
                            <span className="movie-details">Details: </span>{" "}
                            {overview}
                        </p>
                    </div>
                </MovieInfo>
            </MovieWrapper>
        );
    }
}

const Poster = styled.img`
    box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.5);
`;

const MovieWrapper = styled.div`
    position: relative;
    padding-top: 50vh;
    background: url(${props => props.backdrop}) no-repeat 0% 10%;
    background-size: cover;
`;

const MovieInfo = styled.div`
    background: #fff;
    text-align: left;
    padding: 2rem 10%;
    display: flex;

    > div {
        margin-left: 20px;
    }
    img {
        position: relative;
        top: -5rem;
    }
`;
