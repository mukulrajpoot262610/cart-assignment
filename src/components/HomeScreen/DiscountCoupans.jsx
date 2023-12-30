import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';

import Off50 from '../../assets/images/50off';
import Empty from '../../assets/icons/Empty';

const DiscountCoupans = () => {
    return (
        <View className="my-5">
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                className="my-4 px-5"
            >
                <View className="bg-light-200 mr-5 rounded-2xl h-36 w-72 p-5 flex-row items-center">
                    <Empty className="mr-8" />
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
                    <Empty className="mr-8" />
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
    );
};

export default DiscountCoupans;
