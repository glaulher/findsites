import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  about: {
    //  alignItems: 'flex-end',
    // paddingTop: 32,
  },
});

export const iconColor = theme.COLORS.ICONCOLOR;
