import { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { getDatabase } from '@/database';

export interface ISiteData {
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

export function useSiteSearch() {
  const [isVisible, setIsVisible] = useState(false);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [searchName, setSearchName] = useState('');
  const [addresses, setAddresses] = useState<ISiteData[]>([]);

  const searchSite = async () => {
    if (!searchName.trim()) {
      Alert.alert('Atenção', 'Por favor, digite o nome do site.');
      return;
    }

    Keyboard.dismiss();
    try {
      const db = await getDatabase();
      const site = await db.getFirstAsync<ISiteData>(
        `SELECT * FROM sites WHERE nome = ? LIMIT 1`,
        [searchName],
      );

      if (!site) {
        Alert.alert('Oops...', `Site ${searchName} não encontrado!`);
        setSearchName('');
        return;
      }

      site.latitude = String(site.latitude);
      site.longitude = String(site.longitude);

      setAddresses([site]);
      setSearchName('');
    } catch (error) {
      console.error('Erro durante a pesquisa:', error);
      Alert.alert(
        'Erro',
        'Ocorreu um erro durante a pesquisa. Por favor, tente novamente.',
      );
    }
  };

  const handleNavigateToMaps = (lat: string, long: string) => {
    setAddresses([]);
    setLatitude(lat);
    setLongitude(long);
    setIsVisible(true);
  };

  return {
    isVisible,
    latitude,
    longitude,
    searchName,
    addresses,
    setSearchName,
    searchSite,
    handleNavigateToMaps,
    setIsVisible,
  };
}
