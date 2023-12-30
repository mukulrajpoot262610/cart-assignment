
import React from 'react';

import { View, useColorScheme } from 'react-native';
import AppNavigator from './navigation/AppNavigation';
import { Provider } from 'react-redux';
import { store } from './src/global/store';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000000' : '#fff',
  };

  return (
    <View style={backgroundStyle} className="min-h-screen font-manrope">
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </View>
  );
}

export default App;
