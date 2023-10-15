import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface Props extends TouchableOpacityProps {
  onPress: () => void;
  iconName: string;
  iconSize: number;
  iconColor: string;
}

function ButtonOpacity({
  onPress,
  iconName,
  iconSize,
  iconColor,
  ...rest
}: Props) {
  return (
    <TouchableOpacity onPress={onPress} {...rest}>
      <Icon name={iconName} color={iconColor} size={iconSize} />
    </TouchableOpacity>
  );
}

export default ButtonOpacity;
