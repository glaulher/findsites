import React from 'react';
import { Popup } from 'react-native-map-link';

interface Props {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  onCancelPressed: () => void;
  onAppPressed: () => void;
  options: {
    latitude: string;
    longitude: string;
  };
}

export function PopupGps({
  isVisible,
  onCancelPressed,
  onAppPressed,
  setIsVisible,
  options: { latitude, longitude },
}: Props) {
  return (
    <Popup
      isVisible={isVisible}
      onCancelPressed={onCancelPressed}
      onAppPressed={onAppPressed}
      setIsVisible={setIsVisible}
      options={{
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),

        dialogTitle: 'NAVEGAÇÃO',
        dialogMessage: 'Escolha o app de navegação de sua preferência.',
        cancelText: 'Cancelar',
        directionsMode: 'car',
      }}
      modalProps={{ animationType: 'slide' }}
    />
  );
}
