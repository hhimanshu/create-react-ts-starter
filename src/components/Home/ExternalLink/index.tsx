import React from 'react';
import './styles.css';

interface LinkProps {
  title: string;
  url: string;
}

export const ExternalLink = ({ title, url }: LinkProps) => {
  return (
    <a href={url} target={'_blank'} className={'link'}>
      {title}
    </a>
  );
};
