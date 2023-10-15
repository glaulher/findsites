import { StyleSheet } from 'react-native';

import theme from '@theme/index';

export const styles = StyleSheet.create({
  container: {},
  backgroundImage: {
    flex: 1,
  },
  image: {
    width: 500,
    height: 500,
  },

  text: {
    paddingBottom: 16,
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

  list: {
    marginTop: 16,
  },

  goIcon: {
    padding: 10,
    backgroundColor: theme.COLORS.ICONCOLOR_LIGHT,
    borderRadius: 32,
  },
});

export const colorBackgroundImage = theme.COLORS.BACKGROUND;
