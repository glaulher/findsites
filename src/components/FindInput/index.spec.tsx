import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { FindInput } from './index';

describe('<FindInput/>', () => {
  it('check if show correctly search input id placeholder', () => {
    const { getByPlaceholderText } = render(
      <FindInput onChangeText={jest.fn()} onSubmitEditing={jest.fn()}>
        <div />
      </FindInput>,
    );

    const inputPlaceHolder = getByPlaceholderText('Digite o nome do site');

    expect(inputPlaceHolder.props.placeholder).toBeTruthy();
  });

  it('check if catch the value', () => {
    const { getByTestId } = render(
      <FindInput
        onChangeText={jest.fn()}
        onSubmitEditing={jest.fn()}
        value="RJTES01"
      >
        <div />
      </FindInput>,
    );

    const inputSearch = getByTestId('RJTES01');

    expect(inputSearch.props.value).toBeTruthy();
  });

  it('check if onSubmitEditing is called', () => {
    const onSubmitEditingMock = jest.fn();

    const { getByTestId } = render(
      <FindInput
        onChangeText={jest.fn()}
        onSubmitEditing={onSubmitEditingMock}
        value="RJTES01"
      >
        <div />
      </FindInput>,
    );

    const inputSearch = getByTestId('RJTES01');

    // call event onSubmitEditing
    fireEvent(inputSearch, 'onSubmitEditing');

    // Verify call function  onSubmitEditing
    expect(onSubmitEditingMock).toHaveBeenCalled();
  });
  it('check if onChangeText is called with the correct text', () => {
    const onChangeTextMock = jest.fn();

    const { getByTestId } = render(
      <FindInput
        onChangeText={onChangeTextMock}
        onSubmitEditing={jest.fn()}
        value="RJTES01"
      >
        <div />
      </FindInput>,
    );

    const inputSearch = getByTestId('RJTES01');

    const newText = 'RJTES02';

    // Verify change text
    fireEvent.changeText(inputSearch, newText);

    // Verify call function onChangeText
    expect(onChangeTextMock).toHaveBeenCalledWith(newText);
  });

  it('check if autoCapitalize is set correctly', () => {
    const { getByTestId } = render(
      <FindInput
        onChangeText={jest.fn()}
        onSubmitEditing={jest.fn()}
        value="RJTES01"
        autoCapitalize="characters"
      >
        <div />
      </FindInput>,
    );

    const inputSearch = getByTestId('RJTES01');

    // Verify autoCapitalize
    expect(inputSearch.props.autoCapitalize).toBe('characters');
  });
});
