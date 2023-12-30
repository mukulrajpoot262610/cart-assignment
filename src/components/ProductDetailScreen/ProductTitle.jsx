import { View, Text } from 'react-native';
import React from 'react';
import StarRating from '../common/StarRating';

const ProductTitle = ({ productData }) => {
    return (
        <View className="p-5">
            <Text className="font-manrope text-5xl font-light py-1">
                {productData.title}
            </Text>
            <Text className="font-manrope text-5xl font-bold py-1">
                {productData.brand}
            </Text>

            <View className="mt-4 flex-row items-center">
                <StarRating rating={productData.rating} color="#F9B023" />
                <Text className="font-manrope ml-1 py-1 text-xs text-dark-400">
                    {productData.stock} Reviews
                </Text>
            </View>
        </View>
    );
};

export default ProductTitle;
