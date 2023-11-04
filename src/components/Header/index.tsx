import React, { ReactNode } from 'react';
import { Image, View, Text } from 'react-native';

import tower from '@assets/tower.png';
import { styles } from './styles';

interface Props {
  children: ReactNode;
}

export function Header({ children }: Props) {
  return (
    <View style={styles.header}>
      <View style={styles.viewLogo}>
        <Image source={tower} style={styles.tower} testID="header-logo" />
        <Text style={styles.labelLogo}>Find {'\n  '}Sites</Text>
      </View>
      {children}
    </View>
  );
}
