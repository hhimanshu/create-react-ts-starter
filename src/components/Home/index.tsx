import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { Header } from './Header';
import { Why } from './Why';

export const Home = () => {
  return (
    <Fragment>
      <Header />
      <Why />
    </Fragment>
  );
};
