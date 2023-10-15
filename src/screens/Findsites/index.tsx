import React, { useState } from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  ImageBackground,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Linking,
  Alert,
  FlatList,
} from 'react-native';

import towerBackground from '../../assets/home-background.png';
import { Header } from '../../components/Header';
import { FindInput } from '../../components/FindInput';
import { SiteCard } from '../../components/SiteCard';
import ButtonOpacity from '../../components/ButtonOpacity';

import { colorBackgroundImage, styles } from './styles';
import {
  iconColorInfo,
  iconColorSearch,
  iconMap,
} from '../../components/ButtonOpacity/styles';

import address from '../../services/address.json';

function Findsites() {
  const insets = useSafeAreaInsets();

  const [searchName, setSearchName] = useState('');
  const [addresses, setAddresses] = useState<
    {
      ID: number;
      Nome: string;
      latitude: string;
      longitude: string;
      cluster_geo?: string;
      regional: string;
      estado: string;
      municipio: string;
      Endereco: string;
      TipoInfra?: string;
      TipoSiteRf?: string;
    }[]
  >([]);

  const searchSite = async () => {
    const findSite = address.find(site => site.Nome === searchName);

    if (!findSite) {
      Alert.alert('Oops...', `Site ${searchName} não encontrado!`);
      return setSearchName('');
    }
    setAddresses([JSON.parse(JSON.stringify(findSite))]);
    return setSearchName('');
  };

  const navigateToMaps = (coordinates: string) => {
    setAddresses([]);

    return Platform.OS === 'ios'
      ? Linking.openURL(`maps://?q=${coordinates}`)
      : Linking.openURL(`google.navigation:q=${coordinates}`);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View
        style={{
          flex: 1,
          padding: 24,
          paddingTop: Math.max(insets.top, 64),
          paddingBottom: Math.max(insets.bottom, 16),
          backgroundColor: colorBackgroundImage,
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ImageBackground
            source={towerBackground}
            imageStyle={styles.image}
            style={styles.backgroundImage}
          >
            <Header>
              <ButtonOpacity
                onPress={() =>
                  Alert.alert(
                    'Sobre',
                    `Desenvolvido por Glaulher Medeiros. ${'\n'}Contato: glaulher.developer@gmail.com`,
                  )
                }
                iconName="info"
                iconSize={32}
                iconColor={iconColorInfo}
              />
            </Header>
            <View style={styles.text}>
              <Text style={styles.title}>Bem vindo.</Text>
              <Text style={styles.description}>
                Insira o Id do site{'\n'}para localizar o endereço.
              </Text>
            </View>

            <FindInput
              value={searchName}
              onChangeText={setSearchName}
              //  value={search}
              onSubmitEditing={async () => {
                searchSite();
              }}
            >
              <ButtonOpacity
                onPress={async () => {
                  searchSite();
                }}
                onPressIn={Keyboard.dismiss}
                iconName="search"
                iconSize={24}
                iconColor={iconColorSearch}
              />
            </FindInput>

            <FlatList
              style={styles.list}
              showsVerticalScrollIndicator={false}
              data={addresses}
              keyExtractor={item => item.ID.toString()}
              renderItem={({ item }) => (
                <SiteCard
                  site={item.Nome}
                  address={item.Endereco}
                  city={item.municipio}
                  region={item.regional}
                  latitude={item.latitude}
                  longitude={item.longitude}
                >
                  <ButtonOpacity
                    onPress={() => {
                      navigateToMaps(`${item.latitude},${item.longitude}`);
                    }}
                    iconColor={iconMap}
                    iconSize={32}
                    style={styles.goIcon}
                    iconName="chevron-right"
                  />
                </SiteCard>
              )}
            />
          </ImageBackground>
        </TouchableWithoutFeedback>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Findsites;
