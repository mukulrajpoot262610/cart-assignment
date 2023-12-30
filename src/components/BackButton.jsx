import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {

    const navigation = useNavigation();

    return (
        <View className="flex-row justify-start mx-5">
            <TouchableOpacity onPress={() => navigation.goBack()} className="border border-gray-300 rounded-xl h-8 w-8 flex justify-center items-center">
                <Text className="text-xl">&lt;</Text>
                {/* <ChevronLeftIcon size="30" color="gray" /> */}
            </TouchableOpacity>
        </View>
    );
};

export default BackButton;
