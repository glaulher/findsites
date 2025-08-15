import React, { ReactNode } from 'react';
import {
  Image,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import tower from '../../../assets/images/tower.png';
import { styles } from './styles';

interface Props {
  children: ReactNode;
}

export function Header({ children }: Props) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.header}>
        <View style={styles.viewLogo}>
          <Image
            source={tower}
            style={styles.tower}
            testID="header-logo"
            alt="Logo tower"
          />
          <Text style={styles.labelLogo}>Find {'\n  '}Site</Text>
        </View>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
}
