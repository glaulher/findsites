/* eslint-disable no-undef */
import '@testing-library/react-native/extend-expect';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

// Mock do AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

// Mock dos ícones para evitar warnings de act()
jest.mock('@expo/vector-icons', () => {
  const React = require('react');
  return {
    Feather: (props) => React.createElement('Icon', props),
  };
});
