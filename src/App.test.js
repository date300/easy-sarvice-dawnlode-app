import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the premium download landing page', () => {
  render(<App />);
  expect(screen.getByText(/download the app/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /download for ios/i })).toBeInTheDocument();
});
