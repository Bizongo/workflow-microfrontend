import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Counter from './Counter';

test('Check the presence of the Text', async () => {
  let counter = 0;
  const increment = jest.fn(() => counter += 1);
  render(<Counter increment={increment} incrementAsync={increment} count={counter} />);

  fireEvent.click(screen.getByText('increment'));
  const element = screen.getByText('The count is', {exact: false})

  expect(element).toBeInTheDocument();
});
