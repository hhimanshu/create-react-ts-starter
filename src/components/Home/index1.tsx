import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export const Home = () => {
  return (
    <Fragment>
      <h1>
        Hello React in TypeScript + Jest + React Testing Library + Storybook
      </h1>
      <div className={'links'}>
        <Link to={'/page1'}>Link to Page 1</Link>
        <Link to={'/page2'}>Link to Page 2</Link>
      </div>
    </Fragment>
  );
};
