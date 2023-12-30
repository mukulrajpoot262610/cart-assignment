import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../../global/slices/product';
import Snackbar from 'react-native-snackbar';

const ProductActionButton = ({ productData }) => {

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem({ quantity: 1, product: productData, id: productData.id }));
        Snackbar.show({
            text: 'Successfully added to Cart',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: 'green',
        });
    };

    return (
        <View className="flex-row items-center px-5 justify-between gap-5">
            <TouchableOpacity className="border border-light-400 p-5 rounded-2xl flex-1 justify-center items-center" onPress={handleAddToCart}>
                <Text className="text-light-400">Add To Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-light-400 p-5 rounded-2xl flex-1 justify-center items-center">
                <Text className="text-white">Buy Now</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProductActionButton