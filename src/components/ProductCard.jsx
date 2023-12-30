import { View, Text, Image, TouchableOpacity, Touchable } from 'react-native'
import React, { useState } from 'react'
import Heart2 from '../assets/icons/Heart2'
import Heart2Filled from '../assets/icons/Heart2Filled';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ product }) => {

    const navigation = useNavigation();
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <TouchableOpacity className="w-40 h-48 rounded-2xl relative mb-4 mr-4" onPress={() => navigation.navigate('Product', { id: product.id })}>
            <Image
                className="h-32 w-full rounded-2xl" source={{ uri: product.thumbnail }} />

            <TouchableOpacity className="absolute left-3 top-3 rounded-2xl" onPress={() => setIsFavorite(!isFavorite)}>
                {isFavorite ? <Heart2Filled /> : <Heart2 />}

            </TouchableOpacity>

            <View className="px-4 flex-row justify-between items-center">
                <View>
                    <Text className="text-sm font-bold mt-2">${product.price}</Text>
                    <Text numberOfLines={1} className="text-sm font-light max-w-[100px]">{product.title}</Text>
                </View>

                <TouchableOpacity className="bg-light-400 rounded-2xl h-6 w-6 flex justify-center items-center">
                    <Text className="text-white text-sm">+</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard