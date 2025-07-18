import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import ButtonMonths from './index';
import { DataContextProvider } from '../../contexts/DataContext';

describe('Tests for <ButtonMonths /> Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    // Mocka a data para 25 de julho de 2025
    vi.setSystemTime(new Date(2025, 6, 25));
  });

  // afterEach(() => {
  //   // Restaura o tempo real após cada teste
  //   vi.useRealTimers();
  // });

  it('should render the button with the correct text for "Julho"', () => {
    render(
      <DataContextProvider>
        <ButtonMonths month={0} />
      </DataContextProvider>,
    );

    expect(screen.getByText('julho')).toBeInTheDocument();
  });

  it('should render the button with the correct text for "Agosto"', () => {
    render(
      <DataContextProvider>
        <ButtonMonths month={1} />
      </DataContextProvider>,
    );

    expect(screen.getByText('agosto')).toBeInTheDocument();
  });

  it('should render the button with the correct text for "Setembro"', () => {
    render(
      <DataContextProvider>
        <ButtonMonths month={2} />
      </DataContextProvider>,
    );

    expect(screen.getByText('setembro')).toBeInTheDocument();
  });

  it('should render the button with the correct text for "Junho"', () => {
    render(
      <DataContextProvider>
        <ButtonMonths month={-1} />
      </DataContextProvider>,
    );

    expect(screen.getByText('junho')).toBeInTheDocument();
  });

  it('should render the button with the correct text for "Maio"', () => {
    render(
      <DataContextProvider>
        <ButtonMonths month={-2} />
      </DataContextProvider>,
    );

    expect(screen.getByText('maio')).toBeInTheDocument();
  });

  it('should render the button with the correct text for "Abril"', () => {
    render(
      <DataContextProvider>
        <ButtonMonths month={-3} />
      </DataContextProvider>,
    );

    expect(screen.getByText('abril')).toBeInTheDocument();
  });
});
