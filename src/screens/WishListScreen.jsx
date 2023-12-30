import { View, Text, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import BackButton from '../components/common/BackButton';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import WishlistProductCard from '../components/WishlistScreen/WishlistProductCard';
import CartButton from '../components/common/CartButton';

const WishListScreen = () => {

    const navigation = useNavigation();
    const { favorites } = useSelector(state => state.products);

    return (
        <View className="flex justify-center items-center h-full bg-white">

            <View className="h-full w-full">
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="#fff"
                />

                <View className="pt-16 pr-7 flex-row items-center justify-between w-full">
                    <View className="flex-row items-center">
                        <BackButton />
                        <Text className="font-manrope text-base font-medium text-dark-600">WishList ({favorites.length})</Text>
                    </View>
                    <CartButton color="black" />
                </View>

                {
                    favorites.length > 0 ? <View>
                        {/* ITEMS */}
                        <View>
                            <ScrollView className="h-[58vh] mt-5">
                                {
                                    favorites.map((item, i) => <WishlistProductCard
                                        key={i}
                                        product={item}
                                    />)
                                }
                            </ScrollView>
                        </View>
                    </View> : <View className="flex justify-center items-center h-[70vh]">
                        <Image source={require('../assets/images/wishlist.png')} className="h-64 w-64" />
                        <Text className="mt-10">Your Wishlist is Empty</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')} className="bg-light-400 p-3 rounded-2xl mt-4">
                            <Text className="text-white mx-4">Add Now!</Text>
                        </TouchableOpacity>
                    </View>
                }

            </View>
        </View>
    );
};

export default WishListScreen;
