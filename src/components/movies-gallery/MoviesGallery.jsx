import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  ItemStyled,
  ListStyled,
  PStyled,
  NavLinkStyled,
} from '../../pages/HomePage/Homepage.styled';

const MoviesGallery = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ListStyled>
        {movies.length &&
          movies.map(({ id, poster_path, title, vote_average }) => (
            <ItemStyled key={id}>
              <NavLinkStyled to={`/movies/${id}`} state={{ from: location }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${
                    poster_path === null
                      ? '/h5oGodvcoq8cyIDTy79yKn4qbey.jpg'
                      : poster_path
                  }`}
                  alt={title}
                  width="280"
                  height="420"
                  loading="lazy"
                />
                <PStyled>{title}</PStyled>
              </NavLinkStyled>

              <p>{vote_average} ✶</p>
            </ItemStyled>
          ))}
      </ListStyled>
    </>
  );
};

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.number,
    })
  ),
};

export default MoviesGallery;
