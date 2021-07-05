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
    const headings = screen.getAllByRole('heading');
    expect(headings[0].innerHTML).toEqual('React TypeScript Starter');
  });
});
