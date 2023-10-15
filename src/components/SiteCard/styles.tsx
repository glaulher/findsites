import { StyleSheet } from 'react-native';

import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.CARD_BACKGROUND,
    width: '100%',
    borderRadius: 7,
    paddingVertical: 17,
    paddingHorizontal: 24,
    marginBottom: 16,
  },

  title: {
    fontFamily: theme.FONTS.TITLE,
    fontSize: 16,
    backgroundColor: theme.COLORS.CARD_BACKGROUND,
    color: theme.COLORS.TITLE,
  },

  address: {
    paddingTop: 4,
    fontFamily: theme.FONTS.TEXT,
    fontSize: 14,
    color: theme.COLORS.DESCRIPTION,
  },
  city: {
    paddingTop: 4,
  },
  text: {
    fontFamily: theme.FONTS.TEXT,
    fontSize: 14,
    color: theme.COLORS.DESCRIPTION,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    color: theme.COLORS.TEXT_CARD,
  },

  longitude: {
    paddingLeft: 4,
    fontSize: 14,
    color: theme.COLORS.TEXT_CARD,
  },
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export const iconMap = theme.COLORS.GO;
