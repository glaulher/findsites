import React, { ReactNode } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';

import * as Clipboard from 'expo-clipboard';

import Icon from 'react-native-vector-icons/Feather';
import { iconMap, styles } from './styles';

interface Props {
  children: ReactNode;
  site: string;
  address: string;
  latitude: string;
  longitude: string;
  region: string;
  city: string;
  type: string;
}

export function SiteCard({
  children,
  site,
  address,
  city,
  region,
  latitude,
  longitude,
  type,
}: Props) {
  const copyToClipboard = (
    site: string,
    address: string,
    city: string,
    region: string,
    lat: string,
    long: string,
  ) => {
    const locationData = `Site: ${site},\nEndereço: ${address},\nCidade: ${city},\nRegião: ${region},\nLatitude: ${lat},\nLongitude: ${long}`;
    Clipboard.setStringAsync(locationData);
    Alert.alert(`${site}`, 'Endereço copiado!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          copyToClipboard(site, address, city, region, latitude, longitude)
        }
      >
        <View style={styles.cardWrapper}>
          <Text style={styles.title}>{site}</Text>

          {children}
        </View>

        <Text style={styles.address}>{address}</Text>
        <View style={styles.city}>
          <Text style={styles.text}>{city}</Text>
          <View style={styles.cardWrapper}>
            <Text style={styles.text}>{region}</Text>
            <Text style={styles.text}>Infra: {type}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.coordinates}>
            <Icon color={iconMap} name="map-pin" />
            <Text style={styles.latitude}>latitude:{latitude}</Text>
          </View>
          <View style={styles.coordinates}>
            <Icon color={iconMap} name="map-pin" />
            <Text style={styles.longitude}>longitude:{longitude}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
