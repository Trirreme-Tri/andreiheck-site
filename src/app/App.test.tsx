import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { perfil } from '../content/profile';
import { App } from './App';

describe('App', () => {
  it('renders the Home page by default', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: perfil.fraseImpacto }),
    ).toBeInTheDocument();
  });
});
