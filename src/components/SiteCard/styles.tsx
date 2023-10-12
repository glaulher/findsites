import { StyleSheet } from 'react-native';

import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',

    borderRadius: 5,
    paddingVertical: 17,
    paddingHorizontal: 24,
  },

  title: {
    fontFamily: theme.FONTS.TEXT,
    fontSize: 14,
    backgroundColor: '#fcfbfb',
  },

  site: {
    fontFamily: theme.FONTS.TEXT,
    fontSize: 20,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 19,
  },

  category: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  categoryName: {
    fontSize: 14,
    color: '#969CB2',
  },

  date: {
    fontSize: 14,
    color: '#969CB2',
  },
});
