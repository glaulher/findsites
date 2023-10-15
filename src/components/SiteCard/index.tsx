import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';

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
}

export function SiteCard({
  children,
  site,
  address,
  city,
  region,
  latitude,
  longitude,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        <Text style={styles.title}>{site}</Text>

        {children}
      </View>

      <Text style={styles.address}>{address}</Text>
      <View style={styles.city}>
        <Text style={styles.text}>{city}</Text>
        <Text style={styles.text}>{region}</Text>
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
    </View>
  );
}
