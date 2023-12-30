import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CartProductCard from './CartProductCard';
import { useDispatch } from 'react-redux';
import { updateQuantity } from '../../global/slices/product';

const CartItems = ({ items }) => {

    const dispatch = useDispatch();

    const handleUpdateQuantity = (itemId, newQuantity) => {
        dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
    };

    return (
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
    );
};

export default CartItems;
