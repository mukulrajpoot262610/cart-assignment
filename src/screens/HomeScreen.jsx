import { View, Text, StatusBar, TextInput, ScrollView, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import Search from '../assets/icons/Search';
import ChevronDown from '../assets/icons/ChevronDown';
import CartButton from '../components/CartButton';
import { getProducts } from '../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../global/slices/product';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';

const HomeScreen = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const { product } = useSelector(state => state.products);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                const { data } = await getProducts();
                dispatch(setProduct(data.products));
            } catch (err) {
                console.warn(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();

    }, [dispatch]);

    return (
        <View className="h-full">
            <StatusBar
                barStyle="light-content"
                backgroundColor="#153075"
            />

            {/* SEARCH HEADER */}
            <View className="bg-light-400 w-full p-5 pt-16">
                <View className="flex-row justify-between items-center">
                    <Text className="text-2xl font-bold text-white font-manrope">Hey, Rahul</Text>
                    <CartButton />
                </View>

                <View className="my-8 relative">
                    <Search className="absolute z-40 top-4 left-5" size={30} />
                    <TextInput className="bg-light-300 rounded-full p-4 pl-12" placeholder="Search Products or Store" />
                </View>

                <View className="flex-row justify-between">
                    <View>
                        <Text className="uppercase font-extrabold text-xs text-dark-400 font-manrope">Delivery to</Text>
                        <View className="flex-row items-center">
                            <Text className="font-extrabold text-sm mt-1 text-dark-100 font-manrope">Green Way 3000, Sylhet</Text>
                            <ChevronDown className="mt-2 ml-1" />
                        </View>
                    </View>
                    <View>
                        <Text className="uppercase font-extrabold text-xs text-dark-400 font-manrope">Within</Text>
                        <View className="flex-row items-center">
                            <Text className="font-extrabold text-sm mt-1 text-dark-100 font-manrope">1 Hour</Text>
                            <ChevronDown className="mt-2 ml-1" />
                        </View>
                    </View>
                </View>
            </View>

            <ScrollView>
                {/* DISCOUNT */}
                <View className="my-5">
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        className="my-4 px-5"
                    >
                        <View className="bg-light-200 mr-5 rounded-2xl h-36 w-72 p-5 flex-row items-center">
                            <View className="border w-1/3 mr-10" />
                            <View>
                                <Text className="font-light text-white text-xl font-manrope">
                                    Get
                                </Text>
                                <Text className="font-bold text-white text-2xl uppercase font-manrope">
                                    50% Off
                                </Text>
                                <Text className="font-light text-white text-base font-manrope">
                                    On first 03 Order
                                </Text>
                            </View>
                        </View>
                        <View className="bg-[#FFBC6E] rounded-2xl h-36 w-72 p-5 flex-row items-center mr-10">
                            <View className="border w-1/3 mr-10" />
                            <View>
                                <Text className="font-light text-white text-xl">
                                    Get
                                </Text>
                                <Text className="font-bold text-white text-2xl uppercase">
                                    50% Off
                                </Text>
                                <Text className="font-light text-white text-base">
                                    On first 03 Order
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                {/* RECOMMENDATION */}
                <View className="px-5">
                    <Text className="text-3xl text-black font-manrope" onPress={() => navigation.navigate('Product', { id: 1 })}>Recommended</Text>

                    <View className="my-5">
                        {
                            isLoading ? <View><Loading /></View> : (product && <View className="flex-row flex-wrap">
                                {product.map((p, i) => <ProductCard key={i} product={p} />)}
                            </View>)
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;
