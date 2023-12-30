import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { removeItem } from '../global/slices/product';

export default function CartProductCard({ item, onUpdateQuantity }) {

    const { id, product, quantity } = item;
    const dispatch = useDispatch()

    const handleIncreaseQuantity = () => {
        onUpdateQuantity(id, quantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            onUpdateQuantity(id, quantity - 1);
        }
        if (quantity === 1) {
            dispatch(removeItem(id));
        }
    };

    return (
        <View className="flex-row justify-between items-center p-5 border-b border-dark-200 space-x-5">
            <View className="">
                <TouchableOpacity className="flex-row justify-center rounded-2xl" >
                    <Image source={{ uri: product.thumbnail }} className="h-16 w-16 rounded-2xl" />
                </TouchableOpacity>
            </View>
            <View className="flex-1 space-y-1">
                <Text className="text-dark-600 font-manrope text-sm font-bold">{product.title}</Text>
                <Text className="font-manrope">${product.price}</Text>
            </View>
            <View className="flex-row items-center space-x-4">
                <TouchableOpacity className="p-1" onPress={handleDecreaseQuantity}>
                    <Text>-</Text>
                </TouchableOpacity>
                <Text className="text-sm">{quantity}</Text>
                <TouchableOpacity className="p-1" onPress={handleIncreaseQuantity}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}