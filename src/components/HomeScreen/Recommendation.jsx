import { View, Text } from 'react-native';
import React from 'react';

import { useSelector } from 'react-redux';

import Loading from '../common/Loading';
import ProductCard from './ProductCard';

const Recommendation = ({ isLoading }) => {

    const { products } = useSelector(state => state.products);

    return (
        <View className="px-5">
            <Text className="text-3xl text-black font-manrope">Recommended</Text>

            <View className="my-5">
                {
                    isLoading ? <View><Loading /></View> : (products && <View className="flex-row flex-wrap">
                        {products.map((p, i) => <ProductCard key={i} product={p} />)}
                    </View>)
                }
            </View>
        </View>
    );
};

export default Recommendation;
