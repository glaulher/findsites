import { Platform, StyleSheet } from 'react-native';

import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {},

  header: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  main: {
    // flex: 1,
    justifyContent: 'flex-start',
  },

  title: {
    color: theme.COLORS.TITLE,
    fontSize: 32,
    fontFamily: theme.FONTS.TITLE,
    maxWidth: 260,
    marginTop: 16,
  },

  description: {
    color: theme.COLORS.DESCRIPTION,
    fontSize: 16,
    marginTop: 16,
    fontFamily: theme.FONTS.TEXT,
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },

  // top: {
  //   marginBottom: 40,
  // },

  // select: {},

  // button: {
  //   backgroundColor: '#bd93f9',
  //   height: 160,
  //   flexDirection: 'row',
  //   borderRadius: 10,
  //   overflow: 'hidden',
  //   alignItems: 'center',
  //   marginTop: 8,
  //   width: 160,
  // },

  // buttonIcon: {
  //   height: 160,
  //   width: 160,
  //   backgroundColor: 'rgba(0, 0, 0, 0.1)',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },

  image: {
    width: 500,
    height: 500,
  },

  input: {
    flex: 1,
    color: theme.COLORS.TEXTCOLOR,
    fontSize: 18,
    paddingHorizontal: Platform.OS === 'ios' ? 15 : 11,
  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.COLORS.BACKGROUND,
    borderWidth: 1,
    borderColor: theme.COLORS.TITLE,
    height: 50,
    borderRadius: 7,
    marginTop: 30,
  },
  magnifier: {
    paddingHorizontal: Platform.OS === 'ios' ? 15 : 11,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});

export const colorBackgroundImage = theme.COLORS.BACKGROUND;
