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
import { Picker } from '@react-native-picker/picker';

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

  const [searchName, setSearchName] = useState('');
  const [addresses, setAddresses] = useState<IpropsData[]>([]);
  const [picker, setPicker] = useState('AC');

  const searchSite = async () => {
    try {
      const selectSite = stateData[
        picker as keyof typeof stateData
      ] as Array<IpropsData>;

      const findSite = await JSON.parse(JSON.stringify(selectSite)).find(
        (site: IpropsData) => site.nome === searchName,
      );

      if (!findSite) {
        Alert.alert('Oops...', `Site ${searchName} não encontrado!`);
        return setSearchName('');
      }
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

  const navigateToMaps = (coordinates: string) => {
    setAddresses([]);
    try {
      return Platform.OS === 'ios'
        ? Linking.openURL(`maps://?q=${coordinates}`)
        : Linking.openURL(`google.navigation:q=${coordinates}`);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Erro ao abrir o mapa:', error);
      return Alert.alert(
        'Erro',
        'Não foi possível abrir o mapa. Por favor, verifique suas configurações de mapa e tente novamente.',
      );
    }
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
              <Picker selectedValue={picker} onValueChange={setPicker}>
                {Object.keys(stateData).map(state => (
                  <Picker.Item key={state} label={`${state}`} value={state} />
                ))}
              </Picker>
            </View>

            <FindInput
              value={searchName}
              onChangeText={setSearchName}
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
              style={styles.list}
              showsVerticalScrollIndicator={false}
              data={addresses}
              keyExtractor={item => item.id.toString()}
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
                        `${item.latitude.replace(',', '.')},
                        ${item.longitude.replace(',', '.')}`,
                      );
                    }}
                    color={iconMap}
                    size={32}
                    style={styles.goIcon}
                    name="chevron-right"
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
