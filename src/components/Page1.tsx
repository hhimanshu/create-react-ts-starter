import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const Page1 = () => (
  <Fragment>
    <h1>This is page 1</h1>
    <Link to={'/'}>Go to Home</Link>
  </Fragment>
);
