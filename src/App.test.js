import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('switches between Bangla and English content', async () => {
  const user = userEvent.setup();
  render(<App />);

  expect(screen.getByRole('heading', { name: /বিনা পুঁজিতে অনলাইন ব্যবসা শুরু করুন/i })).toBeInTheDocument();

  await user.click(screen.getByRole('button', { name: /english/i }));

  expect(screen.getByRole('heading', { name: /start an online business with zero investment/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /bangla/i })).toBeInTheDocument();
});

test('renders the main landing sections', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /Amazing Features/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /How It Works/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Why Choose Easy Service/i })).toBeInTheDocument();
});
