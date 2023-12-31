import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const CartEmpty = () => {
    const navigation = useNavigation();

    return (
        <View className="flex justify-center items-center h-[70vh]">
            <Image source={require('../../assets/images/empty.png')} className="h-64 w-64" />
            <Text className="mt-10">Your Cart is Empty</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} className="bg-light-400 p-3 rounded-2xl mt-4">
                <Text className="text-white mx-4">Shop Now</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CartEmpty;
