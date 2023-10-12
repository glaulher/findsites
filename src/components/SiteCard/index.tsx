import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './styles';

export function SiteCard() {
  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        <Text style={styles.title}>RJSGO38</Text>
        <TouchableOpacity>
          <Text>T</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.address}>
        Endereço: R: LÚCIO BITENCOUT 60 JADIM CATAINA 22460900 , 60, JARDIM
        CATARINA
      </Text>
      <View style={styles.addressWrapper}>
        <Text style={styles.address}>municipio: São Gonçalo</Text>
        <Text style={styles.address}>regional:CLARO RJ/ES</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.coordinates}>
          <Icon name="info" />
          <Text style={styles.latitude}>latitude:-22,8056</Text>
        </View>
        <Text style={styles.longitude}>longitude:-43,0031</Text>
      </View>
    </View>
  );
}
