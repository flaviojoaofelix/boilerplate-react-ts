import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  // it('', () => {
  //   // ARRANGE
  //   // ACT
  //   // EXPECT
  // });
  it('Render Portfolio', () => {
    // ARRANGE
    render(<App />);
    // ACT
    // EXPECT
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Portfólio'
    );
  });
});
