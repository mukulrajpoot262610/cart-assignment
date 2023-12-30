import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Bag from '../assets/icons/Bag';
import { useSelector } from 'react-redux';

const CartButton = ({ color }) => {

    const navigation = useNavigation();

    const { items } = useSelector(state => state.products);
    const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

    return (
        <TouchableOpacity
            className="relative"
            onPress={() => navigation.navigate('Cart')}>
            <Bag color={color === 'black' ? '#000' : '#fff'} />
            <View className="h-4 w-4 bg-light-200 rounded-full flex justify-center items-center absolute -right-1 -top-1">
                <Text className="text-white text-xs font-manrope">{totalQuantity}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CartButton;
