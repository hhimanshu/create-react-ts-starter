import React from 'react';
import GitHubButton from 'react-github-btn';
import './styles.css';

export const Header = () => {
  return (
    <div className={'header'}>
      <h1>React TypeScript Starter</h1>
      <GitHubButton
        href='https://github.com/hhimanshu/create-react-ts-starter'
        data-color-scheme='no-preference: light; light: light; dark: dark;'
        data-icon='octicon-star'
        data-size='large'
        data-show-count='true'
        aria-label='Star hhimanshu/create-react-ts-starter on GitHub'
      >
        Star
      </GitHubButton>
    </div>
  );
};
