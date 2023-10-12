import React from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  ImageBackground,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import { colorBackgroundImage, styles } from './styles';
import towerBackground from '../../assets/home-background.png';
import { Header } from '../../components/Header';
import { FindInput } from '../../components/FindInput';
import { SiteCard } from '../../components/SiteCard';

function Findsites() {
  const insets = useSafeAreaInsets();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ImageBackground
          source={towerBackground}
          style={{
            flex: 1,
            padding: 24,
            paddingTop: insets.top + 20,
            backgroundColor: colorBackgroundImage,
          }}
          imageStyle={styles.image}
        >
          <Header />

          <View style={styles.main}>
            <View>
              <Text style={styles.title}>Bem vindo.</Text>
              <Text style={styles.description}>
                Insira o Id do site{'\n'}para localizar o endereço.
              </Text>
            </View>

            <FindInput />
          </View>

          <View style={styles.footer}>
            <SiteCard />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default Findsites;
