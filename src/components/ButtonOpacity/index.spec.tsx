import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonOpacity from './index';

describe('<ButtonOpacity />', () => {
  it('calls onPress when button is clicked', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <ButtonOpacity
        onPress={onPressMock}
        name="check"
        size={24}
        color="blue"
      />,
    );

    const button = getByTestId('button-opacity');
    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalled();
  });

  it('displays the correct icon', () => {
    const { getByTestId } = render(
      <ButtonOpacity onPress={jest.fn()} name="check" size={24} color="blue" />,
    );

    const icon = getByTestId('button-icon');

    // Verify render icon
    expect(icon).toBeDefined();
  });

  it('applies custom props', () => {
    const { getByTestId } = render(
      <ButtonOpacity
        onPress={jest.fn()}
        name="check"
        size={24}
        color="blue"
        testID="custom-test-id"
      />,
    );

    const button = getByTestId('custom-test-id');

    expect(button).toBeDefined();
  });
});
