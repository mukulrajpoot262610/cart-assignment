import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ChevronLeft from '../../assets/icons/ChevronLeft';

const BackButton = () => {

    const navigation = useNavigation();

    return (
        <View className="flex-row justify-start mx-5">
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <ChevronLeft />
            </TouchableOpacity>
        </View>
    );
};

export default BackButton;
