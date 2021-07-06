import React, { ReactNode } from 'react';
import Check from '../../../assets/check.svg';
import './styles.css';

interface FeatureProps {
  title: string;
  children: ReactNode;
}

export const Feature = ({ title, children }: FeatureProps) => {
  return (
    <div className={'featureContainer'}>
      <Check />
      <FeatureDetails title={title} children={children} />
    </div>
  );
};

const FeatureDetails = ({ title, children }: FeatureProps) => {
  return (
    <div className={'feature'}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};
