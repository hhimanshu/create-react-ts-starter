import React, { ReactElement } from 'react';
import './styles.css';

interface SectionProps {
  title: string;
  children: ReactElement[];
}

export const Section = ({ title, children }: SectionProps) => {
  return (
    <div className={'section'}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
