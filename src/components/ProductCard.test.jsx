import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import ProductCard from './ProductCard';
import React from 'react';

describe('ProductCard Component', () => {
  const product = { id: 1, title: 'Test Product', price: 10, image: 'test.jpg', category: 'test' };

  it('renders product information', () => {
    render(<ProductCard product={product} handleAddToCart={() => {}} handleAddToWishlist={() => {}} wishlist={[]} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$10.00')).toBeInTheDocument();
  });

  it('calls handleAddToCart when the button is clicked', async () => {
    const handleAddToCart = vi.fn();
    const user = userEvent.setup();
    render(<ProductCard product={product} handleAddToCart={handleAddToCart} handleAddToWishlist={() => {}} wishlist={[]} />);
    await user.click(screen.getByRole('button', { name: /add to cart/i }));
    expect(handleAddToCart).toHaveBeenCalledWith(product);
  });
});
