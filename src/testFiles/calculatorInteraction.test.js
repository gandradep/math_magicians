import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Calculator from '../components/Calculator';

describe('testin calculator', () => {
  test('testing . button', () => {
    render(<Calculator />);
    const display = screen.getByTitle('display');
    const buttonElement = screen.getByRole("button", {name:'.'});
    fireEvent.click(buttonElement);
    expect(display.textContent).toBe('0.');
  });
  test('testing number button', () => {
    render(<Calculator />);
    const display = screen.getByTitle('display');
    const buttonElement = screen.getByRole("button", {name:'5'});
    fireEvent.click(buttonElement);
    expect(display.textContent).toBe('5');
  });
  test('testing AC button', () => {
    render(<Calculator />);
    const display = screen.getByTitle('display');
    const buttonElement = screen.getByRole("button", {name:'AC'});
    fireEvent.click(buttonElement);
    expect(display.textContent).toBe('0');
  });

});
