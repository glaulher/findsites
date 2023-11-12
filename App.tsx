/* eslint-disable react/style-prop-object */
import React, { useEffect } from 'react';

import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import * as Updates from 'expo-updates';

import { StatusBar } from 'expo-status-bar';
import Findsites from './src/screens/Findsites';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Roboto_400Regular,
  });

  useEffect(() => {
    async function updateApp() {
      if (!__DEV__) {
        const { isAvailable } = await Updates.checkForUpdateAsync();
        if (isAvailable) {
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync();
        }
      }
    }
    updateApp();
  }, []);

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
