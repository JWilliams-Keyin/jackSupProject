import { render, screen } from '@testing-library/react';
import Header from '../components/header';

describe('Header Component', () => {
  test('renders the heading correctly', () => {
    render(<Header/>); 
    const heading = screen.getByText(/Code Calling/i); 
    expect(heading).toBeInTheDocument(); 
  });
});