import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CartTotal = ({ items }) => {

    const totalAmount = items.reduce((total, item) => total + item.quantity * item.product.price, 0);

    return (
        <View className="p-5">
            <View className="flex-row justify-between items-center px-4 py-2">
                <Text className="font-manrope tracking-wide text-dark-500">Subtotal</Text>
                <Text className="font-medium text-dark-600">${totalAmount}</Text>
            </View>
            <View className="flex-row justify-between items-center px-4 py-2">
                <Text className="font-manrope tracking-wide text-dark-500">Delivery</Text>
                <Text className="font-medium text-dark-600">$2.00</Text>
            </View>
            <View className="flex-row justify-between items-center px-4 py-2">
                <Text className="font-manrope tracking-wide text-dark-500">Total</Text>
                <Text className="font-medium text-dark-600">${totalAmount + 2}</Text>
            </View>

            <TouchableOpacity className="bg-light-400 p-5 rounded-2xl flex justify-center items-center mt-7">
                <Text className="text-white font-manrope font-semibold">Proceed  To checkout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CartTotal