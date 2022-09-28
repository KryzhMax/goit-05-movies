import MoviesGallery from 'components/movies-gallery/MoviesGallery';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import API from '../../components/movies-api/API';
import Spinner from '../../components/spinner/Spinner';
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(API.IDLE);
  const [error, setError] = useState(false);

  useEffect(() => {
    setStatus(API.PENDING);
    try {
      API.fetchTrendMovies().then(setMovies);
      setStatus(API.RESOLVED);
    } catch (error) {
      setStatus(API.REJECTED);
      setError(true);
    }
  }, []);

  return (
    <>
      {status === API.PENDING && <Spinner />}
      {movies && (
        <section>
          <h1>This week's trending movies!</h1>

          <MoviesGallery movies={movies} />
        </section>
      )}
    </>
  );
};

HomePage.propTypes = {
  movies: PropTypes.array,
};

export default HomePage;