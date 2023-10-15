import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface Props extends TouchableOpacityProps {
  onPress: () => void;
  name: string;
  size: number;
  color: string;
}

function ButtonOpacity({ onPress, name, size, color, ...rest }: Props) {
  return (
    <TouchableOpacity testID="button-opacity" onPress={onPress} {...rest}>
      <Icon testID="button-icon" name={name} color={color} size={size} />
    </TouchableOpacity>
  );
}

export default ButtonOpacity;
