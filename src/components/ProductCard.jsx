import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Heart2 from '../assets/icons/Heart2';
import Heart2Filled from '../assets/icons/Heart2Filled';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, toggleFavorite } from '../global/slices/product';
import Snackbar from 'react-native-snackbar';

const ProductCard = ({ product }) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { favorites } = useSelector(state => state.products);
    const [isFavorite, setIsFavorite] = useState(Boolean(favorites.find(item => item.id === product.id)));

    const handleAddToCart = () => {
        dispatch(addItem({ quantity: 1, product, id: product.id }));
        Snackbar.show({
            text: 'Successfully added to Cart',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: 'green',
        });
    };

    const handleFavorite = () => {
        dispatch(toggleFavorite(product.id));
        Snackbar.show({
            text: 'Successfully added to Wishlist',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: 'green',
        });
    };

    return (
        <TouchableOpacity className="w-40 h-48 rounded-2xl relative mb-4 mr-4" onPress={() => navigation.navigate('Product', { id: product.id })}>
            <Image
                className="h-32 w-full rounded-2xl" source={{ uri: product.thumbnail }} />

            <TouchableOpacity className="absolute left-3 top-3 rounded-2xl" onPress={() => setIsFavorite(!isFavorite)}>
                {favorites.find(item => item.id === product.id) ? <Heart2Filled onPress={handleFavorite} /> : <Heart2 onPress={handleFavorite} />}
            </TouchableOpacity>

            <View className="px-4 flex-row justify-between items-center">
                <View>
                    <Text className="text-sm font-bold mt-2">${product.price}</Text>
                    <Text numberOfLines={1} className="text-sm font-light max-w-[100px]">{product.title}</Text>
                </View>

                <TouchableOpacity className="bg-light-400 rounded-2xl h-6 w-6 flex justify-center items-center" onPress={handleAddToCart}>
                    <Text className="text-white text-sm">+</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

export default ProductCard;
