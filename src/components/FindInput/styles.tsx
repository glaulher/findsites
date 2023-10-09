import { Platform, StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
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

export const iconColor = theme.COLORS.ICONCOLOR;
