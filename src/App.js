// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import './App.css'

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (query) => {
    const response = await axios.get(`https://openlibrary.org/search.json?title=${query}`);
    const movieData = response.data.docs.slice(0, 10); // limit to first 10 results
    const moviesWithDogs = await Promise.all(
      movieData.map(async (movie) => {
        const dogResponse = await axios.get('https://dog.ceo/api/breeds/image/random');
        return { ...movie, dogImage: dogResponse.data.message };
      })
    );
    setMovies(moviesWithDogs);
  };

  return (
    <div className="App">
      <h1>Movie Search</h1>
      <SearchBar onSearch={searchMovies} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
