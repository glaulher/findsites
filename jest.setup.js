/* eslint-disable no-undef */
import '@testing-library/react-native/extend-expect';

// Mock dos ícones para evitar warnings de act()
jest.mock('@expo/vector-icons', () => {
  const React = require('react');
  return {
    Feather: (props) => React.createElement('Icon', props),
  };
});
