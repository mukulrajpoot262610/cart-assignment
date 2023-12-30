import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import CartButton from '../components/CartButton';
import StarRating from '../components/StarRating';

import Heart from '../assets/icons/Heart';

const ProductDetailScreen = () => {

    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <View className="h-full w-full">
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#fff"
            />

            <View className="pt-16 pr-7 flex-row items-center justify-between w-full">
                <BackButton />
                <CartButton color="black" />
            </View>

            {/* TITLE */}
            <View className="p-5">
                <Text className="font-manrope text-5xl font-light py-1">
                    Thin Choise
                </Text>
                <Text className="font-manrope text-5xl font-bold py-1">
                    Top Orange
                </Text>

                <View className="mt-4 flex-row items-center">
                    <StarRating rating={4.5} color="#F9B023" />
                    <Text className="font-manrope ml-1 py-1 text-xs text-dark-400">
                        110 Reviews
                    </Text>
                </View>
            </View>

            {/* IMAGE */}
            <View className="h-64 border relative">
                <TouchableOpacity className="absolute right-5 top-5">
                    <Heart className="" />
                </TouchableOpacity>
            </View>

            {/* PRICE */}
            <View className="p-5 flex-row items-center">
                <Text className="font-manrope text-sm text-light-400 font-bold py-1">
                    $34.70
                    <Text className="font-normal">/KG</Text>
                </Text>

                <View className="p-1 bg-light-400 rounded-full mx-4">
                    <Text
                        className="font-manrope text-xs text-white font-medium mx-4"
                    >
                        $22.04 OFF
                    </Text>
                </View>
            </View>

            {/* BUTTON */}
            <View className="flex-row items-center px-5 justify-between gap-5">
                <TouchableOpacity className="border border-light-400 p-5 rounded-2xl flex-1 justify-center items-center">
                    <Text className="text-light-400">Add To Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-light-400 p-5 rounded-2xl flex-1 justify-center items-center">
                    <Text className="text-white">Buy Now</Text>
                </TouchableOpacity>
            </View>

            {/* DETAILS */}
            <View className="p-5">
                <Text className="font-manrope font-semibold text-base">Details</Text>
                <Text className="text-dark-600 my-2 font-medium">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis risus eget urna mollis ornare vel eu leo.</Text>
            </View>
        </View>
    );
};

export default ProductDetailScreen;
