import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import BackButton from '../components/common/BackButton';
import { useSelector } from 'react-redux';
import CartItems from '../components/CartScreen/CartItems';
import CartTotal from '../components/CartScreen/CartTotal';
import CartEmpty from '../components/CartScreen/CartEmpty';

const CartScreen = () => {

    const { items } = useSelector(state => state.products);

    const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);


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
                        <CartItems items={items} />
                        <CartTotal items={items} />
                    </View>
                        :
                        <CartEmpty />
                }

            </View>
        </View>
    );
};

export default CartScreen;
