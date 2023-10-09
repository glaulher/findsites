import React from 'react';
import { Alert, Image, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import logo from '../../assets/logo.png';
import { iconColor, styles } from './styles';

export function Header() {
  const about = () => {
    Alert.alert(
      'Sobre',
      `Desenvolvido por Glaulher Medeiros. ${'\n'}Contato: glaulher.developer@gmail.com`,
    );
  };
  return (
    <View style={styles.header}>
      <Image source={logo} />
      <TouchableOpacity style={styles.about} onPress={() => about()}>
        <Icon name="info" color={iconColor} size={32} />
      </TouchableOpacity>
    </View>
  );
}
