// it('inital test', () => {
//   expect(true).toBeTruthy();
// });

import { render, screen } from '@testing-library/react';
import App from './App';

it("Should have the 'tests with jest' text visible in the screen", () => {
  render(<App />);

  const paragraphElement = screen.getByText('tests with jest');
  expect(paragraphElement).toBeInTheDocument();
});
