import React, { ReactNode } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

import { styles } from './styles';

interface Props extends TextInputProps {
  // eslint-disable-next-line react/require-default-props
  onChangeText?: (text: string) => void;
  // eslint-disable-next-line react/require-default-props
  value?: string;
  // eslint-disable-next-line react/require-default-props
  onSubmitEditing?: () => void;
  children: ReactNode;
}

export function FindInput({
  onChangeText,
  value,
  onSubmitEditing,
  children,
  ...restOnChange
}: Props) {
  return (
    <View style={styles.viewInput}>
      <TextInput
        style={styles.input}
        autoCapitalize="characters"
        placeholder="Digite o nome do site"
        onSubmitEditing={onSubmitEditing}
        value={value}
        onChangeText={onChangeText}
        {...restOnChange}
      />
      <View style={styles.magnifier}>{children}</View>
    </View>
  );
}
