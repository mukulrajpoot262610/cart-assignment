import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Bag from '../assets/icons/Bag';

const CartButton = ({ color }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            className="relative"
            onPress={() => navigation.navigate('Cart')}>
            <Bag color={color === 'black' ? '#000' : '#fff'} />
            <View className="h-4 w-4 bg-light-200 rounded-full flex justify-center items-center absolute -right-1 -top-1">
                <Text className="text-white text-xs font-manrope">3</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CartButton;
