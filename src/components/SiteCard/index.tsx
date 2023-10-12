import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './styles';

export function SiteCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RJSGO38</Text>

      <Text style={styles.site}>R$ 12.000,00</Text>

      <View style={styles.footer}>
        <View style={styles.category}>
          <Icon name="info" />
          <Text style={styles.categoryName}>Vendas</Text>
        </View>
        <Text style={styles.date}>13/04/2021</Text>
      </View>
    </View>
  );
}
