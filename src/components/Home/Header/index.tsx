import React from 'react';
import './styles.css';

export const Header = () => {
  return (
    <div className={'header'}>
      <h1>React TypeScript Starter</h1>
      <iframe
        src='https://ghbtns.com/github-btn.html?user=hhimanshu&repo=create-react-ts-starter&type=star&count=true&size=large'
        frameBorder='0'
        scrolling='0'
        width='170'
        height='30'
        title='GitHub'
      />
    </div>
  );
};
