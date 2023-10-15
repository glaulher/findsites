import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { render } from '@testing-library/react-native';
import Findsites from './index';

describe('<Findsites>', () => {
  it('should render without errors', () => {
    render(
      <SafeAreaProvider>
        <Findsites />,
      </SafeAreaProvider>,
    );
  });
});
