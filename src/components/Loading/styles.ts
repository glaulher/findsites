import { StyleSheet } from 'react-native';
import Theme from '@/constants/Theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.COLORS.BACKGROUND,
  },
});
export const LoadingIndicator = {
  color: Theme.COLORS.PRIMARY_800,
};
