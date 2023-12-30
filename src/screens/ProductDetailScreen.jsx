import { View, StatusBar, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import BackButton from '../components/common/BackButton';
import CartButton from '../components/common/CartButton';

import { useDispatch } from 'react-redux';

import { getProduct } from '../services/api';
import Loading from '../components/common/Loading';
import ProductTitle from '../components/ProductDetailScreen/ProductTitle';
import ProductImage from '../components/ProductDetailScreen/ProductImage';
import ProductPrice from '../components/ProductDetailScreen/ProductPrice';
import ProductActionButton from '../components/ProductDetailScreen/ProductActionButton';
import ProductDetail from '../components/ProductDetailScreen/ProductDetail';

const ProductDetailScreen = ({ route }) => {

    let { id } = route.params;

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
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
        isLoading ?
            <View
                className="h-full flex justify-center items-center">
                <Loading />
            </View>
            :
            <View className="h-full w-full">
                <ScrollView>
                    <StatusBar
                        barStyle="dark-content"
                        backgroundColor="#fff"
                    />

                    <View className="pt-16 pr-7 flex-row items-center justify-between w-full">
                        <BackButton />
                        <CartButton color="black" />
                    </View>

                    <ProductTitle productData={productData} />
                    <ProductImage
                        productData={productData}
                        id={id}
                    />
                    <ProductPrice productData={productData} />
                    <ProductActionButton productData={productData} />
                    <ProductDetail productData={productData} />
                </ScrollView>
            </View>

    );
};

export default ProductDetailScreen;
