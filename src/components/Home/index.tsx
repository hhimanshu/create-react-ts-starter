import React, { Fragment } from 'react';
import './styles.css';
import { Header } from './Header';
import { Why } from './Why';
import { Features } from './Features';
import { GetStarted } from './GetStarted';
import { Discussion } from './Discussion';

export const Home = () => {
  return (
    <Fragment>
      <Header />
      <Why />
      <Features />
      <GetStarted />
      <Discussion />
    </Fragment>
  );
};
