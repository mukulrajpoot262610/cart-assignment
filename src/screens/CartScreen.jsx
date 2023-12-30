import { View, Text, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import BackButton from '../components/BackButton';
import CartProductCard from '../components/CartProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { updateQuantity } from '../global/slices/product';

const CartScreen = () => {

    const { items } = useSelector(state => state.products);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const totalAmount = items.reduce((total, item) => total + item.quantity * item.product.price, 0);
    const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

    const handleUpdateQuantity = (itemId, newQuantity) => {
        dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
    };


    return (
        <View className="flex justify-center items-center h-full bg-white">

            <View className="h-full w-full">
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="#fff"
                />

                <View className="pt-16 pr-7 flex-row items-center w-full">
                    <BackButton />
                    <Text className="font-manrope text-base font-medium text-dark-600">Shopping Cart ({totalQuantity})</Text>
                </View>

                {
                    totalQuantity > 0 ? <View>
                        {/* ITEMS */}
                        <View>
                            <ScrollView className="h-[58vh] mt-5">
                                {
                                    items.map((item, i) => <CartProductCard
                                        key={i}
                                        item={item}
                                        onUpdateQuantity={handleUpdateQuantity}
                                    />)
                                }
                            </ScrollView>
                        </View>

                        {/* TOTAL */}
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
                    </View> : <View className="flex justify-center items-center h-[70vh]">
                        <Image source={require('../assets/images/undraw_empty_cart_co35.png')} className="h-64 w-64" />
                        <Text className="mt-10">Your Cart is Empty</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')} className="bg-light-400 p-3 rounded-2xl mt-4">
                            <Text className="text-white mx-4">Shop Now</Text>
                        </TouchableOpacity>
                    </View>
                }

            </View>
        </View>
    );
};

export default CartScreen;
