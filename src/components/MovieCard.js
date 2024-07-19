// src/components/MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.dogImage} alt="Random Dog" />
      <h2>{movie.title}</h2>
      <p>{movie.author_name?.join(', ')}</p>
      <p>{movie.first_publish_year}</p>
    </div>
  );
};

export default MovieCard;
