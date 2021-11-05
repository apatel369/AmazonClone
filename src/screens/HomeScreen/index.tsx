/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ProductItem from '../../components/ProductItem';
import products from '../../data/products';

const HomeScreen = () => {
  return (
    <View>
      <FlatList data={products} renderItem={({item}) => <ProductItem item={item}/>} showsVerticalScrollIndicator={false}/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  
});
