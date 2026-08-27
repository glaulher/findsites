// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);


module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = config;

  return {
    ...config,
    resolver: {
      ...config.resolver,
      sourceExts: [...sourceExts, 'mjs', 'tsx', 'ts', 'js'],
      assetExts: [...assetExts, 'db'],
    },
  };
})();
