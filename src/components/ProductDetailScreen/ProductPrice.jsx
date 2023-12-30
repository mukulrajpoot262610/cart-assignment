import { View, Text } from 'react-native';
import React from 'react';

const ProductPrice = ({ productData }) => {
    return (
        <View className="p-5 flex-row items-center">
            <Text className="font-manrope text-base text-light-400 font-bold py-1">
                ${productData.price}
            </Text>

            <View className="p-1 bg-light-400 rounded-full mx-4">
                <Text
                    className="font-manrope text-xs text-white font-medium mx-4"
                >
                    {productData.discountPercentage}% OFF
                </Text>
            </View>
        </View>
    );
};

export default ProductPrice;
