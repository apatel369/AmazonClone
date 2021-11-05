/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProductItem from '../../components/ProductItem';
import products from '../../data/products';

const HomeScreen = () => {
  return (
    <View>
      <ProductItem item={products[1]}/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  
});
