import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import BackButton from '../components/BackButton';

const ProductDetailScreen = () => {
    return (
        <View className="h-full">
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#fff"
            />

            <View className="pt-16">
                <BackButton />
            </View>

            <View>

            </View>
        </View>
    );
};

export default ProductDetailScreen;
