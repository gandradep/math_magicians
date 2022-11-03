import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import App from '../App';

describe('links interaction testing', () => {
  test('testing quote link', () => {
    render(<App />);
    const inputElement = screen.getByText(/quote/i);
    fireEvent.click(inputElement);
  });
  test('testing calculator link', () => {
    render(<App />);
    const inputElement = screen.getByText(/calculator/i);
    fireEvent.click(inputElement);
  });
});
