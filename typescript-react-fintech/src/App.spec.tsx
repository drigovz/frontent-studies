import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Tests for <App /> Component', () => {
  it('Should find text "tests with vitest" on the page', () => {
    render(<App />);
    const textElement = screen.getByText('tests with vitest');
    expect(textElement).toBeInTheDocument();
  });
});
