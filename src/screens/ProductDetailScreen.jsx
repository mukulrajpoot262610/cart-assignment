import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
import CartButton from '../components/CartButton';
import StarRating from '../components/StarRating';

import Heart from '../assets/icons/Heart';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLoading } from '../global/slices/product';
import { getProduct } from '../services/api';
import Loading from '../components/Loading';

const ProductDetailScreen = ({ route }) => {

    let { id } = route.params;

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);
    const [productData, setProductData] = useState();

    useEffect(() => {

        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                const { data } = await getProduct(id);
                setProductData(data);
            } catch (err) {
                console.warn(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();

    }, [dispatch, id]);

    return (
        isLoading ? <View className="h-full flex justify-center items-center"><Loading /></View> : <View className="h-full w-full">
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#fff"
            />

            <View className="pt-16 pr-7 flex-row items-center justify-between w-full">
                <BackButton />
                <CartButton color="black" />
            </View>

            {/* TITLE */}
            <View className="p-5">
                <Text className="font-manrope text-5xl font-light py-1">
                    {productData.title}
                </Text>
                <Text className="font-manrope text-5xl font-bold py-1">
                    {productData.brand}
                </Text>

                <View className="mt-4 flex-row items-center">
                    <StarRating rating={productData.rating} color="#F9B023" />
                    <Text className="font-manrope ml-1 py-1 text-xs text-dark-400">
                        {productData.stock} Reviews
                    </Text>
                </View>
            </View>

            {/* IMAGE */}
            <View className="h-64 relative">
                <Image
                    className="w-full h-full"
                    source={{ uri: productData.thumbnail }}
                />
                <TouchableOpacity className="absolute right-5 top-5 bg-white p-4 rounded-2xl">
                    <Heart className="" />
                </TouchableOpacity>
            </View>

            {/* PRICE */}
            <View className="p-5 flex-row items-center">
                <Text className="font-manrope text-base text-light-400 font-bold py-1">
                    ${productData.price}
                </Text>

                <View className="p-1 bg-light-400 rounded-full mx-4">
                    <Text
                        className="font-manrope text-xs text-white font-medium mx-4"
                    >
                        {productData.discountPercentage}% OFF
                    </Text>
                </View>
            </View>

            {/* BUTTON */}
            <View className="flex-row items-center px-5 justify-between gap-5">
                <TouchableOpacity className="border border-light-400 p-5 rounded-2xl flex-1 justify-center items-center">
                    <Text className="text-light-400">Add To Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-light-400 p-5 rounded-2xl flex-1 justify-center items-center">
                    <Text className="text-white">Buy Now</Text>
                </TouchableOpacity>
            </View>

            {/* DETAILS */}
            <View className="p-5">
                <Text className="font-manrope font-semibold text-base">Details</Text>
                <Text className="text-dark-600 my-2 font-medium">{productData.description}</Text>
            </View>
        </View>

    );
};

export default ProductDetailScreen;
