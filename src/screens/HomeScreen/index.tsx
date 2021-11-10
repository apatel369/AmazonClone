/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ProductItem from '../../components/ProductItem';
import products from '../../data/products';

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <FlatList data={products} renderItem={({item}) => <ProductItem item={item}/>} showsVerticalScrollIndicator={false}/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root:{
    padding:10
  }
});
