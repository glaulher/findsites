/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  ImageBackground,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  FlatList,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

import AsyncStorage from '@react-native-async-storage/async-storage';

import towerBackground from '@assets/home-background.png';

import { Header } from '@components/Header';
import { FindInput } from '@components/FindInput';
import { SiteCard } from '@components/SiteCard';
import ButtonOpacity from '@components/ButtonOpacity';
import {
  iconColorInfo,
  iconColorSearch,
  iconMap,
} from '@components/ButtonOpacity/styles';

import { colorBackgroundImage, styles } from './styles';

import { stateData } from '../../database';
import { PopupGps } from '@components/PopupGps';

interface IpropsData {
  id: number;
  nome: string;
  latitude: string;
  longitude: string;
  regional: string;
  estado: string;
  municipio: string;
  tipo: string;
  endereco: string;
}
function Findsites() {
  const insets = useSafeAreaInsets();

  const [isVisible, setIsVisible] = useState(false);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const [searchName, setSearchName] = useState('');
  const [addresses, setAddresses] = useState<IpropsData[]>([]);
  const [selectedValue, setSelectedValue] = useState('');

  const searchSite = async () => {
    try {
      const selectSite = stateData[
        selectedValue as keyof typeof stateData
      ] as Array<IpropsData>;

      const findSite = await JSON.parse(JSON.stringify(selectSite)).find(
        (site: IpropsData) => site.nome === searchName,
      );

      if (!findSite) {
        Alert.alert('Oops...', `Site ${searchName} não encontrado!`);
        return setSearchName('');
      }
      // confirms that latitude and longitude will be of type string
      findSite.latitude = String(findSite.latitude);
      findSite.longitude = String(findSite.longitude);

      setAddresses([findSite]);

      return setSearchName('');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Erro durante a pesquisa:', error);
      return Alert.alert(
        'Erro',
        'Ocorreu um erro durante a pesquisa. Por favor, tente novamente.',
      );
    }
  };

  const navigateToMaps = (lat: string, long: string) => {
    setAddresses([]);
    try {
      return [setLatitude(lat), setLongitude(long)];
    } catch {
      return Alert.alert(
        'Erro',
        'Ocorreu um erro durante a busca. Por favor, tente novamente.',
      );
    }
  };

  const onValueChange = async (value: string) => {
    setSelectedValue(value);
    try {
      await AsyncStorage.setItem('FindSites:selectedValue', value);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const loadSelectedState = async () => {
      try {
        const value = await AsyncStorage.getItem('FindSites:selectedValue');
        if (value === null) {
          return setSelectedValue('AC');
        }
        return setSelectedValue(value);
      } catch (e) {
        console.log(e);
      }
    };
    loadSelectedState();
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View
        accessibilityLabel="initial screen"
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
                name="info"
                size={32}
                color={iconColorInfo}
              />
            </Header>
            <View style={styles.text}>
              <Text style={styles.title}>Bem vindo.</Text>
              <Text style={styles.description}>
                Insira a região e o Id do site{'\n'}para localizar o endereço.
              </Text>
            </View>

            <View style={styles.picker}>
              <Picker
                selectedValue={selectedValue}
                onValueChange={onValueChange}
              >
                {Object.keys(stateData).map((state) => (
                  <Picker.Item key={state} label={`${state}`} value={state} />
                ))}
              </Picker>
            </View>

            <FindInput
              value={searchName}
              onChangeText={(value) => setSearchName(value.trim())}
              placeholder="Digite o nome do site"
              onSubmitEditing={async () => {
                searchSite();
              }}
            >
              <ButtonOpacity
                onPress={async () => {
                  searchSite();
                }}
                onPressIn={Keyboard.dismiss}
                name="search"
                size={24}
                color={iconColorSearch}
              />
            </FindInput>

            <FlatList
              accessibilityLabel="card address"
              style={styles.list}
              showsVerticalScrollIndicator={false}
              data={addresses}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <SiteCard
                  site={item.nome}
                  address={item.endereco}
                  city={item.municipio}
                  region={item.regional}
                  latitude={item.latitude.replace(',', '.')}
                  longitude={item.longitude.replace(',', '.')}
                  type={item.tipo}
                >
                  <ButtonOpacity
                    onPress={() => {
                      navigateToMaps(
                        `${item.latitude.replace(',', '.')}`,
                        `${item.longitude.replace(',', '.')}`,
                      );
                      return setIsVisible(true);
                    }}
                    color={iconMap}
                    size={32}
                    style={styles.goIcon}
                    name="chevron-right"
                  />
                </SiteCard>
              )}
            />

            <PopupGps
              isVisible={isVisible}
              onCancelPressed={() => setIsVisible(false)}
              onAppPressed={() => setIsVisible(false)}
              onBackButtonPressed={() => setIsVisible(false)}
              options={{
                latitude,
                longitude,
              }}
            />
          </ImageBackground>
        </TouchableWithoutFeedback>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Findsites;
