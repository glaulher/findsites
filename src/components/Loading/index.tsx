import { ActivityIndicator, View } from 'react-native';
import { LoadingIndicator, styles } from './styles';

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating
        color={LoadingIndicator.color}
        size="large"
      />
    </View>
  );
}
