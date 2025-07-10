import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DataContextProvider } from '../../contexts/DataContext';
import DateRange from './index';

describe('Tests for <DateRange /> Component', () => {
  it('Should find text "Initial" on the page', () => {
    render(
      // em componentes que usam o contexto, devemos envolver o componente com o DataContextProvider
      <DataContextProvider>
        <DateRange />
      </DataContextProvider>,
    );

    const textElement = screen.getByText('Initial');
    expect(textElement).toBeInTheDocument();
  });

  it('Should find text "Final" on the page', () => {
    render(
      <DataContextProvider>
        <DateRange />
      </DataContextProvider>,
    );

    const textElement = screen.getByText('Final');
    expect(textElement).toBeInTheDocument();
  });

  it('Should be render <Input /> component on the page', () => {
    render(
      <DataContextProvider>
        <DateRange />
      </DataContextProvider>,
    );

    // procuramos o componente <Input /> pelo label "Initial"
    const inputElement = screen.getByLabelText('Initial');

    // verificamos se o componente <Input /> está presente na página
    expect(inputElement).toBeInTheDocument();

    // verificamos se o componente <Input /> tem o atributo type "date"
    expect(inputElement).toHaveAttribute('type', 'date');
    // verificamos se o componente <Input /> tem o atributo id "initial"
    expect(inputElement).toHaveAttribute('id', 'initial');
  });
});
