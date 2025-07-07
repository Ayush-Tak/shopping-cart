import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import React from 'react';

describe('Navbar Component', () => {
  it('renders navigation links', () => {
    render(<BrowserRouter><Navbar cartCount={0} wishlistCount={0} /></BrowserRouter>);
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /shop/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /cart/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument();
  });

  it('displays the correct number of items in the cart and wishlist', () => {
    render(<BrowserRouter><Navbar cartCount={3} wishlistCount={5} /></BrowserRouter>);
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });
});
