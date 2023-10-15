import React, { ReactNode } from 'react';
import { Image, View } from 'react-native';

import logo from '../../assets/logo.png';
import { styles } from './styles';

interface Props {
  children: ReactNode;
}

export function Header({ children }: Props) {
  return (
    <View style={styles.header}>
      <Image source={logo} />
      {children}
    </View>
  );
}
