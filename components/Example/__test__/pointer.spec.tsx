import { render, screen } from '@testing-library/react';
import PointerInteraction from '../PointerInteraction';
import user from '@testing-library/user-event';
describe('Pointer interactions', () => {
  it('should render the component', () => {
    render(<PointerInteraction />);
    const buttonEle = screen.getByRole('button', {
      name: 'Counter',
    });
    expect(buttonEle).toBeInTheDocument();
  });

  it('renders the counter to be 0', () => {
    render(<PointerInteraction />);
    const countEle = screen.getByRole('heading');
    expect(countEle).toHaveTextContent('0');
  });

  it('Should increase the counter when counter button clicked', async () => {
    user.setup();
    render(<PointerInteraction />);
    const buttonEle = screen.getByRole('button', {
      name: 'Counter',
    });
    await user.click(buttonEle);
    const countEle = screen.getByRole('heading');
    expect(countEle).toHaveTextContent('1');
  });

  it('Should increase the counter button by twice if we click the counter button twice', async () => {
    user.setup();
    render(<PointerInteraction />);
    const buttonEle = screen.getByRole('button', {
      name: 'Counter',
    });
    await user.click(buttonEle);
    await user.click(buttonEle);
    const countEle = screen.getByRole('heading');
    expect(countEle).toHaveTextContent('2');
  });

  it('Should set the amount value after typing in the input box and click on the set buttons', async () => {
    user.setup();
    render(<PointerInteraction />);
    const buttonEle = screen.getByRole('button', {
      name: 'Set',
    });
    const amountInput = screen.getByRole('spinbutton');
    await user.type(amountInput, '10');
    expect(amountInput).toHaveValue(10);
    await user.click(buttonEle);
    const screenEle = screen.getByRole('heading');
    expect(screenEle).toHaveTextContent('10');
  });

  it('Should elements are focused in the right order', async () => {
    user.setup();
    render(<PointerInteraction />);
    const amountInput = screen.getByRole('spinbutton');
    const setEle = screen.getByRole('button', {
      name: 'Set',
    });
    const buttonEle = screen.getByRole('button', {
      name: 'Counter',
    });
    await user.tab();
    expect(setEle).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(buttonEle).toHaveFocus();
  });
});
