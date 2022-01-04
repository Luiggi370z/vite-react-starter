import App from './App';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

// TODO: Instead of using BABEL, modularize all env variables to mock them in tests, due a issue with ts-jest and ESM modules
// https://github.com/kulshekhar/ts-jest/issues/1174
// 
// file: src/utils/env.ts
jest.mock('utils', () => ({
  envVariables: {
    MY_VAR: 'my value',
  },
}));

test('Render main app page correctly', async () => {
  render(<App />);
  const buttonCount = await screen.findByRole('button');
  const codeCount = await screen.queryByText(/The count is now:/);

  expect(buttonCount.innerHTML).toBe('count is: 0');
  expect(codeCount).not.toBeInTheDocument();

  user.click(buttonCount);
  user.click(buttonCount);

  expect(buttonCount.innerHTML).toBe('count is: 2');
  expect(await screen.queryByText(/The count is now:/)).toBeInTheDocument();
});
