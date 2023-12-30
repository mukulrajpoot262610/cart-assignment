
import React from 'react';

import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import AppNavigator from './navigation/AppNavigation';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000000' : '#fff',
  };

  return (
    <SafeAreaView style={backgroundStyle} className="min-h-screen">
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <AppNavigator />
    </SafeAreaView>
  );
}

export default App;
