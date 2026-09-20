import React, { ComponentProps } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

type FeatherIconName = ComponentProps<typeof Feather>['name'];

interface Props extends TouchableOpacityProps {
  onPress: () => void;
  name: FeatherIconName;
  size: number;
  color: string;
}

function ButtonOpacity({ onPress, name, size, color, ...rest }: Props) {
  return (
    <TouchableOpacity testID="button-opacity" onPress={onPress} {...rest}>
      <Feather testID="button-icon" name={name} color={color} size={size} />
    </TouchableOpacity>
  );
}

export default ButtonOpacity;
