
import React from 'react';

import { SafeAreaView, StatusBar, View, useColorScheme } from 'react-native';
import AppNavigator from './navigation/AppNavigation';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000000' : '#fff',
  };

  return (
    <View style={backgroundStyle} className="min-h-screen font-manrope">
      <AppNavigator />
    </View>
  );
}

export default App;
