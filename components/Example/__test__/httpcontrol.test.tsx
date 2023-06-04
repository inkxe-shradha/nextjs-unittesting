import { render, screen } from '@testing-library/react';
import HttpControlComponent from '../HttpControlComponent';
import { server } from '@/mocks/server';
import { rest } from 'msw';

describe('Testing the HTTP request calls', () => {
  it('Should render the list of users', async () => {
    render(<HttpControlComponent />);
    const user = await screen.findAllByRole('listitem');
    expect(user).toHaveLength(3);
  });

  it('Should throw error if the API fails', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/todos',
        (req, res, context) => {
          return res(context.status(500));
        }
      )
    );
    render(<HttpControlComponent />);
    const errorText = await screen.findByText('Try again later');
    expect(errorText).toBeInTheDocument();
  });
});
