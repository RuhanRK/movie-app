import React, { Component } from "react";
import Movie from "./Movie";
import styled from "styled-components";

export default class Movies extends Component {
    state = {
        movies: []
    };
    async componentDidMount() {
        try {
            const res = await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=d46d740097baa41a646508d9f42267b7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
            );
            const movies = await res.json();
            this.setState({
                movies: movies.results
            });
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        const { movies } = this.state;
        return (
            <MovieGrid>
                {movies.map(movie => (
                    <Movie key={movie.id} movie={movie} />
                ))}
            </MovieGrid>
        );
    }
}

const MovieGrid = styled.div`
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1rem;

    @media (max-width: 970px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 750px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 550px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 450px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
