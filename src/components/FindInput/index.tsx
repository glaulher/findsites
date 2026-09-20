import React, { ReactNode } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

import { placeholderColor, styles } from './styles';

interface Props extends TextInputProps {
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
  placeholder: string;
  children: ReactNode;
  placeholderTextColor?: string;
}

export function FindInput({
  onChangeText,
  value,
  onSubmitEditing,
  placeholder,
  placeholderTextColor = placeholderColor,
  children,
  ...restOnChange
}: Props) {
  return (
    <View style={styles.viewInput}>
      <TextInput
        testID={value}
        style={styles.input}
        autoCapitalize="characters"
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onSubmitEditing={onSubmitEditing}
        value={value}
        onChangeText={onChangeText}
        {...restOnChange}
      />
      <View style={styles.magnifier}>{children}</View>
    </View>
  );
}
