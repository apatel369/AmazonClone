import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Button from '../components/button';
import CartProductItem from '../components/cartProductItem';
import products from '../data/cart';

const ShoppingCartScreen = () => {
  const total = products.reduce((sum, product) => sum + product.item.price * product.quantity, 0)
  return (
    <View>

      <FlatList
        data={products}
        renderItem={({ item }) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <Text style={{ fontSize: 18 }}>Subtotal ({products.length} items):{' '}<Text style={{ color: '#e47911', fontWeight: 'bold' }}>{total.toFixed(2)}</Text></Text>
            <Button text='proceed to checkout' onPress={() => console.log(':>> g')} />
          </View>
        )}
      />
    </View>
  );
};

export default ShoppingCartScreen;

const styles = StyleSheet.create({});
