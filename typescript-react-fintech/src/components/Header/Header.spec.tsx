import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './index';
import { DataContextProvider } from '../../contexts/DataContext';

// Mock do useLocation
const mockUseLocation = vi.fn();

// Mock da lib do react-router-dom
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useLocation: () => mockUseLocation(),
  };
});

// Mock do hook useFetch para evitar chamadas de API
vi.mock('../../hooks/useFetch', () => ({
  default: () => ({
    data: [],
    loading: false,
    fetchError: null,
  }),
}));

// Mock do document.title
Object.defineProperty(document, 'title', {
  writable: true,
  value: '',
});

describe('Tests for <Header /> Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    document.title = '';
    // Configurar o mock padrão
    mockUseLocation.mockReturnValue({ pathname: '/' });
  });

  it('should render "Summary" title when pathname is "/"', () => {
    mockUseLocation.mockReturnValue({ pathname: '/' });

    render(
      <BrowserRouter>
        <DataContextProvider>
          <Header />
        </DataContextProvider>
      </BrowserRouter>,
    );

    expect(screen.getByText('Summary')).toBeInTheDocument();
    expect(document.title).toBe('Fintech | Summary');
  });

  it('should render "Sales" title when pathname is "/sales"', () => {
    mockUseLocation.mockReturnValue({ pathname: '/sales' });

    render(
      <BrowserRouter>
        <DataContextProvider>
          <Header />
        </DataContextProvider>
      </BrowserRouter>,
    );

    expect(screen.getByText('Sales')).toBeInTheDocument();
    expect(document.title).toBe('Fintech | Sales');
  });

  it('should render "Sale" title for any other pathname', () => {
    mockUseLocation.mockReturnValue({ pathname: '/sale/123' });

    render(
      <BrowserRouter>
        <DataContextProvider>
          <Header />
        </DataContextProvider>
      </BrowserRouter>,
    );

    expect(screen.getByText('Sale')).toBeInTheDocument();
    expect(document.title).toBe('Fintech | Sale');
  });

  it('should update title when location changes', () => {
    const { rerender } = render(
      <BrowserRouter>
        <DataContextProvider>
          <Header />
        </DataContextProvider>
      </BrowserRouter>,
    );

    // Primeiro render com pathname '/'
    mockUseLocation.mockReturnValue({ pathname: '/' });
    rerender(
      <BrowserRouter>
        <DataContextProvider>
          <Header />
        </DataContextProvider>
      </BrowserRouter>,
    );

    expect(screen.getByText('Summary')).toBeInTheDocument();
    expect(document.title).toBe('Fintech | Summary');

    // Mudança para '/sales'
    mockUseLocation.mockReturnValue({ pathname: '/sales' });
    rerender(
      <BrowserRouter>
        <DataContextProvider>
          <Header />
        </DataContextProvider>
      </BrowserRouter>,
    );

    expect(screen.getByText('Sales')).toBeInTheDocument();
    expect(document.title).toBe('Fintech | Sales');
  });
});
