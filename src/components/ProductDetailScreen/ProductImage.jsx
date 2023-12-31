import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Heart2 from '../../assets/icons/Heart2'
import Heart2Filled from '../../assets/icons/Heart2Filled'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite } from '../../global/slices/product'
import Snackbar from 'react-native-snackbar'
import { SliderBox } from 'react-native-image-slider-box';

const ProductImage = ({ productData, id }) => {

    const dispatch = useDispatch();

    const { favorites } = useSelector(state => state.products);

    const handleFavorite = () => {
        dispatch(toggleFavorite(id));
        favorites.find(item => item.id === id) ? Snackbar.show({
            text: 'Successfully removed from Wishlist',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: 'green',
        }) : Snackbar.show({
            text: 'Successfully added to Wishlist',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: 'green',
        });
    };

    return (
        <View className="h-64 relative">
            <SliderBox images={productData.images}
                className="h-full"
                dotColor="#F9B023"
                inactiveDotColor="#E7ECF0"
                dotStyle={{
                    height: 4,
                    width: 20,
                    margin: -1,
                }}

            />
            <TouchableOpacity className="absolute right-6 top-6 rounded-2xl bg-white flex justify-center items-center h-8 w-8 pt-1" onPress={handleFavorite}>
                {favorites.find(item => item.id === id) ? <Heart2Filled /> : <Heart2 />}
            </TouchableOpacity>
        </View>
    )
}

export default ProductImage