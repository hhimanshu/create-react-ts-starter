import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const Page2 = () => (
  <Fragment>
    <h1>This is page 2</h1>
    <Link to={'/'}>Go to Home</Link>
  </Fragment>
);
