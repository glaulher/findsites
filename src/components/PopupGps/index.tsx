import React from 'react';
import { Popup } from 'react-native-map-link';

interface Props {
  isVisible: boolean;
  onCancelPressed: () => void;
  onAppPressed: () => void;
  onBackButtonPressed: () => void;
  options: {
    latitude: string;
    longitude: string;
  };
}

export function PopupGps({
  isVisible,
  onCancelPressed,
  onAppPressed,
  onBackButtonPressed,
  options: { latitude, longitude },
}: Props) {
  return (
    <Popup
      isVisible={isVisible}
      onCancelPressed={onCancelPressed}
      onAppPressed={onAppPressed}
      onBackButtonPressed={onBackButtonPressed}
      options={{
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),

        dialogTitle: 'NAVEGAÇÃO',
        dialogMessage: 'Escolha o app de navegação de sua preferência.',
        cancelText: 'Cancelar',
        directionsMode: 'car',
      }}
      appsWhiteList={[
        'apple-maps',
        'google-maps',
        'citymapper',
        'uber',
        'lyft',
        'transit',
        'truckmap',
        'waze',
        'yandex',
        'moovit',
        'yandex-maps',
        'yandex-taxi',
        'kakaomap',
        'mapycz',
        'maps-me',
        'osmand',
        'gett',
        'navermap',
        'dgis',
        'liftago',
        'petalmaps',
      ]}
      modalProps={{ animationIn: 'slideInUp' }}
    />
  );
}

//  const navigateToMaps = (lat: string, long: string) => {
//     setAddresses([]);
//     try {
//       // return Platform.OS === 'ios'
//       //   ? Linking.openURL(`maps://?q=${latitude},${longitude}`)
//       //   : Linking.openURL(`google.navigation:q=${latitude},${longitude}`);
//       // Linking.openURL(`waze://?ll=${latitude},${longitude}&navigate=yes`);

//       // return showLocation({
//       //   latitude: parseFloat(latitude),
//       //   longitude: parseFloat(longitude),
//       //   appsWhiteList: [
//       //     'apple-maps',
//       //     'google-maps',
//       //     'waze',
//       //   ],
//       //   directionsMode: 'car',
//       //   // title: 'The White House',
//       //   dialogTitle: 'Seguir pra o site',
//       //   dialogMessage: 'Escolha o app de navegação de sua preferência.',
//       //   cancelText: 'Cancelar',
//       // });

//       return [setLatitude(lat), setLongitude(long)];
//     } catch {
//       return Alert.alert(
//         'Erro',
//         'Ocorreu um erro durante a busca. Por favor, tente novamente.',
//       );
//     }
//   };
