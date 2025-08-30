import { Asset } from 'expo-asset';
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';

interface DB {
  instance: SQLite.SQLiteDatabase | null;
}

const db: DB = {
  instance: null,
};

export async function getDatabase(): Promise<SQLite.SQLiteDatabase> {
  if (db.instance) {
    console.log('Banco de dados carregado');
    return db.instance;
  }

  const dbName = 'findsites.db';
  const dbPath = `${FileSystem.documentDirectory}SQLite/${dbName}`;
  const versionFile = `${FileSystem.documentDirectory}SQLite/version.txt`;

  const dbVersion = '1'; //ATUALIZAR ESSE VALOR AO MODIFICAR O BANCO

  const storedVersion = await FileSystem.readAsStringAsync(versionFile).catch(
    () => null,
  );

  const fileInfo = await FileSystem.getInfoAsync(dbPath);

  if (storedVersion !== dbVersion) {
    console.log('Copiando banco para armazenamento interno...');

    if (fileInfo.exists) {
      await FileSystem.deleteAsync(dbPath, { idempotent: true });
    }

    const asset = Asset.fromModule(
      require('../../assets/database/findsites.db'),
    );

    await asset.downloadAsync();

    await FileSystem.makeDirectoryAsync(
      `${FileSystem.documentDirectory}SQLite`,
      { intermediates: true },
    );

    await FileSystem.copyAsync({
      from: asset.localUri!,
      to: dbPath,
    });
    await FileSystem.writeAsStringAsync(versionFile, dbVersion);
  }

  db.instance = SQLite.openDatabaseSync(dbName);

  return db.instance;
}
