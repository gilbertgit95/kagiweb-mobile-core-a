/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

// import AuthContext, { UseAuthContext } from './src/common/contexts/authContext';
import AsyncStorageContext, { UseAsyncStorageContext } from './src/common/contexts/asyncStorageContext';
import AccountContext, { UseAccountContext } from './src/common/contexts/accountContext';
import Screens from './src/screens';

const App: () => Node = () => {
  // const authContextStates = UseAuthContext()
  const asyncStorageStates = UseAsyncStorageContext()
  const accountStates = UseAccountContext()

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
