import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { WrappedApp, App } from './App';

describe('App', () => {
  // it('', () => {
  //   // ARRANGE
  //   // ACT
  //   // EXPECT
  // });
  describe('Render Pages', () => {
    it('Render Portfolio', () => {
      // ARRANGE
      render(<WrappedApp />);
      // ACT
      // EXPECT
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
        'Home Page'
      );
    });

    it('Renders NOT FOUND page if invalid path', () => {
      render(
        <MemoryRouter initialEntries={['/dunof']}>
          <App />
        </MemoryRouter>
      );

      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
        '404 - Not Found'
      );
    });
  });
});
