import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { Header } from './Header';
import { Why } from './Why';
import { Features } from './Features';

export const Home = () => {
  return (
    <Fragment>
      <Header />
      <Why />
      <Features />
    </Fragment>
  );
};
