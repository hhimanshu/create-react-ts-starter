import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import sum from '../sum';

describe('A test', () => {
  it('2 + 2 = 4', () => {
    expect(sum(2, 2)).toEqual(4);
  });
});

describe('Test App Component', () => {
  it('should display h1', () => {
    render(<App />);
    const h1 = screen.getByRole('heading');
    expect(h1.innerHTML).toEqual(
      'Hello React in TypeScript + Jest + React Testing Library + Storybook'
    );
  });
});
