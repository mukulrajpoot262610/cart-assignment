import { View, StatusBar, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { getProducts } from '../services/api';
import { setProduct } from '../global/slices/product';

import SearchHeader from '../components/HomeScreen/SearchHeader';
import DiscountCoupans from '../components/HomeScreen/DiscountCoupans';
import Recommendation from '../components/HomeScreen/Recommendation';

const HomeScreen = () => {

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [searchInput, setSearchInput] = useState();

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

            <SearchHeader setSearchInput={setSearchInput} />

            <ScrollView>
                <DiscountCoupans />
                <Recommendation isLoading={isLoading} />
            </ScrollView>
        </View>
    );
};

export default HomeScreen;
