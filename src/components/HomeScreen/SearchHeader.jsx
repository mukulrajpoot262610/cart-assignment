import React from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import CartButton from '../common/CartButton';
import Search from '../../assets/icons/Search';
import ChevronDown from '../../assets/icons/ChevronDown';

const SearchHeader = ({ setSearchInput }) => {

    const navigation = useNavigation();

    return (
        <View className="bg-light-400 w-full p-5 pt-16">
            <View className="flex-row justify-between items-center">
                <Text className="text-2xl font-bold text-white font-manrope">Hey, Rahul</Text>
                <CartButton />
            </View>

            <View className="my-8 relative">
                <Search className="absolute z-40 top-4 left-5" size={30} />
                <TextInput
                    className="bg-light-300 rounded-full p-4 pl-12"
                    placeholder="Search Products or Store"
                    onChange={(e) => setSearchInput(e.target.value)}
                />
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
                    <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
                        <View className="flex-row items-center">
                            <Text className="font-extrabold text-sm mt-1 text-dark-100 font-manrope">1 Hour</Text>
                            <ChevronDown className="mt-2 ml-1" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SearchHeader;
