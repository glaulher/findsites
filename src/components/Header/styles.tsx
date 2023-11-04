import theme from '@theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  about: {},
  tower: {
    width: 50,
    height: 75,
  },
  viewLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelLogo: {
    alignItems: 'center',
    color: theme.COLORS.TITLE,
    fontSize: 24,
    fontFamily: theme.FONTS.TITLE,
    maxWidth: 260,
    marginLeft: 8,
    paddingBottom: 8,
  },
});
