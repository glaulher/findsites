/* eslint-disable react/style-prop-object */
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StatusBar } from 'expo-status-bar';
import Findsites from './src/screens/Findsites';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Roboto_400Regular,
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {fontsLoaded ? (
        <>
          <StatusBar style="dark" translucent backgroundColor="transparent" />
          <SafeAreaProvider>
            <Findsites />
          </SafeAreaProvider>
        </>
      ) : (
        <Loading />
      )}
    </GestureHandlerRootView>
  );
}
