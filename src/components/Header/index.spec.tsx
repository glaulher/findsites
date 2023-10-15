import React from 'react';
import { render } from '@testing-library/react-native';
import { View } from 'react-native';
import { Header } from './index';

describe('<Header />', () => {
  it('renders the logo', () => {
    const { getByTestId } = render(
      <Header>
        <View />
      </Header>,
    );
    const logo = getByTestId('header-logo');

    expect(logo).toBeDefined();
  });
});
