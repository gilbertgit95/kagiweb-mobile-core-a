/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
// import type {Node} from 'react';
import SplashScreen from  "react-native-splash-screen";

// import AuthContext, { useAuthContext } from './src/common/contexts/authContext';
import AsyncStorageContext, { useAsyncStorageContext } from './src/common/contexts/asyncStorageContext';
import AccountContext, { useAccountContext } from './src/common/contexts/accountContext';
import Screens from './src/screens';

// const App: () => Node = () => {
const App = () => {
  // const authContextStates = useAuthContext()
  const asyncStorageStates = useAsyncStorageContext()
  const accountStates = useAccountContext()

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <AsyncStorageContext.Provider
      value={{
        ...asyncStorageStates
      }}>
      <AccountContext.Provider
        value={{
          ...accountStates
        }}>
        <Screens />
      </AccountContext.Provider>
    </AsyncStorageContext.Provider>
  )
};

export default App;
