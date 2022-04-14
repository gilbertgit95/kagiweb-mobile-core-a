/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  useColorScheme
} from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import PrimaryTheme from './src/common/themes/primary';
import Screens from './src/screens';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = {
    ...DefaultTheme,
    ...PrimaryTheme
  };

  return (
    <PaperProvider theme={theme}>
      <Screens />
    </PaperProvider>
  );
};

export default App;
