import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { vi } from 'vitest';
import routes from './routes';
import React from 'react';

// Mock the global fetch API
const mockProducts = [
  { id: 1, title: 'Fjallraven Backpack', price: 109.95, image: 'test1.jpg', category: "men's clothing" },
  { id: 2, title: 'Slim Fit T-Shirt', price: 22.3, image: 'test2.jpg', category: "men's clothing" },
];

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockProducts),
    })
  );
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Router Integration Tests', () => {
  it('renders the homepage on the default route', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/'] });
    render(<RouterProvider router={router} />);
    expect(await screen.findByRole('heading', { name: /welcome to our shop/i })).toBeInTheDocument();
  });

  it('navigates to the shop page and displays products', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/'] });
    render(<RouterProvider router={router} />);

    const user = userEvent.setup();
    // Use a more specific selector to distinguish between the two "shop" links
    const nav = screen.getByRole('navigation');
    await user.click(within(nav).getByRole('link', { name: /shop/i }));

    expect(await screen.findByRole('heading', { name: /our fakeass collection/i })).toBeInTheDocument();
    expect(screen.getByText('Fjallraven Backpack')).toBeInTheDocument();
  });

  it('navigates to the cart page', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/'] });
    render(<RouterProvider router={router} />);

    const user = userEvent.setup();
    await user.click(screen.getByRole('link', { name: /cart/i }));

    expect(await screen.findByRole('heading', { name: /your cart/i })).toBeInTheDocument();
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });
});
