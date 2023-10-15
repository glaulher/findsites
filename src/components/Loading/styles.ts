import { StyleSheet } from 'react-native';
import theme from '@theme/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLORS.BACKGROUND,
  },
});
export const LoadingIndicator = {
  color: theme.COLORS.PRIMARY_800,
};
