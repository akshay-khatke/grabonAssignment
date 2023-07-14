module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          screens: './src/screens',
          components: './src/components',
          navigations: './src/navigations',
          models: './src/models',
          store: './src/store',
          assets: './src/assets',
          constants: './src/constants',
          utils: './src/utils',
          theme: './src/theme',
          services: './src/services',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
