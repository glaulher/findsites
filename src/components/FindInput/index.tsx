import React from 'react';
import { Linking, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { iconColor, styles } from './styles';

export function FindInput() {
  return (
    <View style={styles.viewInput}>
      <TextInput
        style={styles.input}
        autoCapitalize="characters"
        placeholder="Digite o nome do site"
        // placeholderTextColor="#6C6C80"
        // onChangeText={setNewSkill}
      />
      <TouchableOpacity
        style={styles.magnifier}
        onPress={() => Linking.openURL('')}
      >
        <Icon name="search" color={iconColor} size={24} />
      </TouchableOpacity>
    </View>
  );
}
