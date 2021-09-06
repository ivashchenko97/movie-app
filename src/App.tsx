import React from 'react';

import MovieList from './components/MovieList'
import SearchBar from './components/SearchBar'
import Loader from './components/Loader'

import { Movie } from './interfaces'

import './App.css';

function App() {
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const getMoviesRequest = async (searchValue: string) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

    setIsLoading(true);

    try {
      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson.Search) {
        return setMovies(responseJson.Search);
      }

      throw new Error(responseJson?.Error || 'Movies were not found')
    } catch (e) {
      alert((e as any)?.message)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <SearchBar
        value={searchValue}
        setSearchValue={setSearchValue}
        searchForFilms={(name) => getMoviesRequest(name)}
      />
      {
        isLoading ?
          <Loader /> :
          <MovieList
            movies={movies}
          />
      }
    </div>
  );
}

export default App;
