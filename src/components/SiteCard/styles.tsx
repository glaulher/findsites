import { StyleSheet } from 'react-native';

import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 7,
    paddingVertical: 17,
    paddingHorizontal: 24,
  },

  title: {
    fontFamily: theme.FONTS.TITLE,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    color: theme.COLORS.TITLE,
  },

  address: {
    paddingTop: 4,
    fontFamily: theme.FONTS.TEXT,
    fontSize: 14,
    color: theme.COLORS.DESCRIPTION,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 16,
  },

  coordinates: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  latitude: {
    paddingLeft: 4,
    fontSize: 14,
    color: '#969CB2',
  },

  longitude: {
    fontSize: 14,
    color: '#969CB2',
  },
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addressWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
});
