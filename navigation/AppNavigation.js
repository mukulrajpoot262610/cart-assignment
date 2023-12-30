import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../src/screens/HomeScreen';
import ProductDetailScreen from '../src/screens/ProductDetailScreen';
import CartScreen from '../src/screens/CartScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigator() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Product" component={ProductDetailScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Cart" component={CartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}
