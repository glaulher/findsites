import React from 'react';

import {
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  FlatList,
} from 'react-native';

import { useAssets } from 'expo-asset';
import { ImageBackground } from 'expo-image';

import { Header } from '@/components/Header';
import { FindInput } from '@/components/FindInput';
import { SiteCard } from '@/components/SiteCard';
import ButtonOpacity from '@/components/ButtonOpacity';
import { PopupGps } from '@/components/PopupGps';
import {
  iconColorInfo,
  iconColorSearch,
  iconMap,
} from '@/components/ButtonOpacity/styles';

import { styles } from './styles';
import { useSiteSearch } from '@/hooks/useSiteSearch';

function HomeFindsites() {
  const [assets, error] = useAssets(
    require('../../../assets/home-background.png'),
  );

  const {
    isVisible,
    latitude,
    longitude,
    searchName,
    addresses,
    setSearchName,
    searchSite,
    handleNavigateToMaps,
    setIsVisible,
  } = useSiteSearch();

  if (!assets || error) {
    return;
  }

  return (
    <View
      accessibilityLabel="initial screen"
      style={{
        flex: 1,
        padding: 24,
        paddingTop: 32,
        paddingBottom: 16,
      }}
    >
      <ImageBackground
        source={assets[0]}
        imageStyle={{
          width: 500,
          height: 500,
        }}
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.text}>
            <Text style={styles.title}>Bem vindo.</Text>
            <Text style={styles.description}>
              Insira o Id do site{'\n'}para localizar o endereço.
            </Text>
          </View>
        </TouchableWithoutFeedback>

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
              latitude={parseFloat(item.latitude.replace(',', '.')).toFixed(4)}
              longitude={parseFloat(item.longitude.replace(',', '.')).toFixed(
                4,
              )}
              copyLatitude={item.latitude.replace(',', '.')}
              copyLongitude={item.longitude.replace(',', '.')}
              type={item.tipo}
            >
              <ButtonOpacity
                onPress={() => {
                  handleNavigateToMaps(
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
          setIsVisible={() => setIsVisible(false)}
          options={{
            latitude,
            longitude,
          }}
        />
      </ImageBackground>
    </View>
  );
}

export default HomeFindsites;
