import { View, Text } from 'react-native'
import React from 'react'

const ProductDetail = ({ productData }) => {
    return (
        <View className="p-5">
            <Text className="font-manrope font-semibold text-base">Details</Text>
            <Text className="text-dark-600 my-2 font-medium">{productData.description}</Text>
        </View>
    )
}

export default ProductDetail