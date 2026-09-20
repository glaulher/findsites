import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';

import * as Updates from 'expo-updates';
import { StatusBar } from 'expo-status-bar';

import { SafeAreaView } from 'react-native-safe-area-context';

import { Loading } from '@/components/Loading';
import HomeFindsites from '@/app/HomeFindsites';

import theme from '@/constants/Theme';
import { getDatabase } from '@/database';

export default function Index() {
  const [dbReady, setDbReady] = useState(false);

  const [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Roboto_400Regular,
  });

  useEffect(() => {
    async function updateApp() {
      await getDatabase();

      if (!__DEV__) {
        const { isAvailable } = await Updates.checkForUpdateAsync();
        if (isAvailable) {
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync();
        }
      }
    }
    setDbReady(true);
    updateApp();
  }, []);

  return (
    <>
      {fontsLoaded && dbReady ? (
        <>
          <View
            style={{
              flex: 1,
              backgroundColor: theme.COLORS.BACKGROUND,
            }}
          >
            <StatusBar style="dark" />
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : undefined}
              style={{
                flex: 1,
              }}
            >
              <SafeAreaView
                style={{
                  flex: 1,
                }}
              >
                <HomeFindsites />
              </SafeAreaView>
            </KeyboardAvoidingView>
          </View>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
