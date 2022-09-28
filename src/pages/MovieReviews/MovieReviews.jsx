import { Link, useLocation, useParams } from 'react-router-dom';
// import { useState } from 'react';
import Avatar from 'react-avatar';
import PropTypes from 'prop-types';
// import API from 'components/movies-api/API';
import Spinner from 'components/spinner/Spinner';

import useHook from '../../hooks/hooks';
import {
  HStyled,
  TextStyled,
  ListStyled,
  SectionContainer,
} from './MovieReviews.styled';

const MovieReviews = () => {
  // const [status, setStatus] = useState(API.IDLE);
  const movieId = useParams();
  const reviews = useHook.useFetchReviews(movieId);
  const location = useLocation();

  return (
    <>
      {reviews.length === 0 && <HStyled>Guess nothing is there...</HStyled>}
      {reviews && (
        <section>
          <SectionContainer>
            <Link to={location?.state?.from ?? '/'} />
            <HStyled>MovieReviews</HStyled>
            <ListStyled>
              {reviews.map(
                ({ author_details: { username }, content, created_at, id }) => {
                  return (
                    <li key={id}>
                      <Avatar round={true} size={40} name={username} />
                      <p>
                        <b>{username.toUpperCase()}</b>
                      </p>
                      <TextStyled>{content}</TextStyled>
                      <p></p>
                      <p>
                        <i>{created_at}</i>
                      </p>
                    </li>
                  );
                }
              )}
            </ListStyled>
          </SectionContainer>
        </section>
      )}
    </>
  );
};

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author_details: PropTypes.shape({
        username: PropTypes.string.isRequired,
      }),
      content: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MovieReviews;
