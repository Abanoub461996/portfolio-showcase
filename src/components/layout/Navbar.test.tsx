
import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar Component', () => {
  test('renders the navbar with correct links', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    
    // Check if the logo/name is in the document
    expect(screen.getByText(/Abanoub/i)).toBeInTheDocument();
    expect(screen.getByText(/Ragaay/i)).toBeInTheDocument();
    
    // Check if navigation links are rendered
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    
    // Check if contact button is rendered
    const contactButtons = screen.getAllByText('Contact Me');
    expect(contactButtons.length).toBeGreaterThan(0);
  });
});
