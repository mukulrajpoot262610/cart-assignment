import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../../global/slices/product';
import Snackbar from 'react-native-snackbar';

export default function WishlistProductCard({ product }) {

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem({ quantity: 1, product, id: product.id }));
        Snackbar.show({
            text: 'Successfully added to Cart',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: 'green',
        });
    };

    return (
        <View className="flex-row justify-between items-center p-5 border-b border-dark-200 space-x-5">
            <View className="">
                <TouchableOpacity className="flex-row justify-center rounded-2xl" >
                    <Image source={{ uri: product?.thumbnail }} className="h-16 w-16 rounded-2xl" />
                </TouchableOpacity>
            </View>
            <View className="flex-1 space-y-1">
                <Text className="text-dark-600 font-manrope text-sm font-bold">{product.title}</Text>
                <Text className="font-manrope">${product.price}</Text>
            </View>
            <View className="flex-row items-center space-x-4">
                <TouchableOpacity className="bg-light-400 rounded-2xl p-3 px-6 flex justify-center items-center" onPress={handleAddToCart}>
                    <Text className="text-white text-sm">Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}