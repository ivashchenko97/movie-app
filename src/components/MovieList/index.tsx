import React from 'react';

import { Movie } from '../../interfaces'

import './styles.css';

interface MovieListProps {
	movies: Movie[]
}

const MovieList = ({ movies }: MovieListProps) => (
	<section className='moviesContainer'>
		{movies.map((movie) => (
			<div key={movie.imdbID} className='movieCard'>
				<img
					className="movieCardImage"
					src={movie.Poster}
					alt='movie poster'
				/>
				<h3>{movie.Title}</h3>
				<h3>{movie.Year}</h3>
			</div>
		))}
	</section>
);

export default MovieList;