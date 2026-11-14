import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

test('renders the portfolio and switches between its public sections', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Jabez Dailey' })).toBeInTheDocument();

  const nav = within(screen.getAllByRole('navigation')[0]);
  expect(nav.getAllByRole('button').map((button) => button.value)).toEqual([
    'experience', 'projects', 'skills',
  ]);

  fireEvent.click(nav.getByRole('button', { name: /projects/i }));
  expect(screen.getByRole('heading', { name: 'Personal Site' })).toBeInTheDocument();

  fireEvent.click(nav.getByRole('button', { name: /experience/i }));
  expect(screen.getByRole('heading', { name: 'Deloitte · Atlanta, GA' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Personal Site' })).not.toBeInTheDocument();

  fireEvent.click(nav.getByRole('button', { name: /skills/i }));
  expect(screen.getByText('Languages')).toBeInTheDocument();
});
