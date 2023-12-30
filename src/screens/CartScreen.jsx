import { View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import BackButton from '../components/BackButton';

const CartScreen = () => {
    return (
        <View className="flex justify-center items-center h-full">
            <View className="h-full w-full">
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="#fff"
                />

                <View className="pt-16 pr-7 flex-row items-center w-full">
                    <BackButton />
                    <Text className="font-manrope text-base font-medium text-dark-600">Shopping Cart (5)</Text>
                </View>

                {/* ITEMS */}
                <View>
                    <ScrollView className="h-[58vh]">

                    </ScrollView>
                </View>

                {/* TOTAL */}
                <View className="p-5">
                    <View className="flex-row justify-between items-center px-4 py-2">
                        <Text className="font-manrope tracking-wide text-dark-500">Subtotal</Text>
                        <Text className="font-medium text-dark-600">$35.96</Text>
                    </View>
                    <View className="flex-row justify-between items-center px-4 py-2">
                        <Text className="font-manrope tracking-wide text-dark-500">Delivery</Text>
                        <Text className="font-medium text-dark-600">$2.00</Text>
                    </View>
                    <View className="flex-row justify-between items-center px-4 py-2">
                        <Text className="font-manrope tracking-wide text-dark-500">Total</Text>
                        <Text className="font-medium text-dark-600">$37.96</Text>
                    </View>

                    <TouchableOpacity className="bg-light-400 p-5 rounded-2xl flex justify-center items-center mt-7">
                        <Text className="text-white font-manrope font-semibold">Proceed  To checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default CartScreen;
