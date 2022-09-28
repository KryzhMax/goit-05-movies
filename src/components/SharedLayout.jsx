import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navigation from '../components/Navigation/Navigation';
import Spinner from './spinner/Spinner';
const SharedLayout = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

SharedLayout.propTypes = {
  Outlet: PropTypes.node,
};

export default SharedLayout;
