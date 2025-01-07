import { render, screen } from '@testing-library/react';
import Footer from '../components/footer';

describe('Footer Component', () => {
  test('renders the footer correctly', () => {
    render(<Footer/>); 
    const footerText = screen.getByText(/for test/i); 
    expect(footerText).toBeInTheDocument(); 
  });
});