import React, { ReactElement } from 'react';
import './styles.css';

interface SectionProps {
  title: string;
  children: ReactElement | ReactElement[];
  bgColor?: string;
}

export const Section = ({
  title,
  children,
  bgColor = '#FFFFFF',
}: SectionProps) => {
  return (
    <section className={'section'} style={{ backgroundColor: `${bgColor}` }}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
