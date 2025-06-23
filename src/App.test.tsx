
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the components used in App
jest.mock('./pages/Index', () => () => <div data-testid="mock-index">Index Page</div>);
jest.mock('./pages/NotFound', () => () => <div data-testid="mock-notfound">Not Found</div>);
jest.mock('./components/ui/toaster', () => ({
  Toaster: () => <div data-testid="mock-toaster">Toaster</div>
}));
jest.mock('./components/ui/sonner', () => ({
  Toaster: () => <div data-testid="mock-sonner">Sonner</div>
}));
jest.mock('@tanstack/react-query', () => ({
  QueryClient: jest.fn(),
  QueryClientProvider: ({children}: React.PropsWithChildren<{}>) => <div>{children}</div>
}));
jest.mock('./components/ui/tooltip', () => ({
  TooltipProvider: ({children}: React.PropsWithChildren<{}>) => <div>{children}</div>
}));

jest.mock('react-router-dom', () => ({
  BrowserRouter: ({children}: React.PropsWithChildren<{}>) => <div>{children}</div>,
  Routes: ({children}: React.PropsWithChildren<{}>) => <div>{children}</div>,
  Route: ({element}: {element: React.ReactNode}) => element,
}));

describe('App Component', () => {
  test('renders main components', () => {
    render(<App />);
    
    expect(screen.getByTestId('mock-index')).toBeInTheDocument();
    expect(screen.getByTestId('mock-toaster')).toBeInTheDocument();
    expect(screen.getByTestId('mock-sonner')).toBeInTheDocument();
  });
});
