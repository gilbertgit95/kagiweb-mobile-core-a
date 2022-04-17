/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import AuthContext, { UseAuthContext } from './src/common/contexts/authContext';
import Screens from './src/screens';

const App: () => Node = () => {
  const authContextStates = UseAuthContext()

  return (
    <AuthContext.Provider
      value={{
        ...authContextStates
      }}>
      <Screens />
    </AuthContext.Provider>
  )
};

export default App;
