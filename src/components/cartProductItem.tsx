import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from './quantitySelector';

interface CartProductItemProps {
  cartItem: {
    id: string;
    quantity: number;
    option?: string;
    item: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?: number;
    };
  }

}

const CartProductItem = ({ cartItem }: CartProductItemProps) => {
  const { item, quantity: quantityProp } = cartItem;
  const [qunatity, setQunatity] = useState(quantityProp)
  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
        <View />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {item.title}
          </Text>
          <View style={styles.ratingsContainer}>
            {[0, 0, 0, 0, 0].map((el, idx) => (
              <FontAwesome
                key={`${item.id}-${idx}`}
                style={styles.star}
                name={idx < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                size={18}
                color={'#e47911'}
              />
            ))}
            <Text>{item.ratings}</Text>
          </View>
          <Text style={styles.price}>
            from {item.price}
            {item.oldPrice ? (
              <Text style={styles.oldPrice}>{item.oldPrice}</Text>
            ) : null}
          </Text>
        </View>

      </View>
      <View style={styles.quantityContainer}>
      <QuantitySelector quantity={qunatity} setQuantity={setQunatity} />

      </View>
    </View>
  );
};

export default CartProductItem;

const styles = StyleSheet.create({
  root: {
    margin: 10,
    // flexDirection:'row',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    padding:10
  },
  row:{
    flexDirection: 'row',
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityContainer:{
    marginLeft:1
  },
  star: {
    margin: 2,
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 12,
    textDecorationLine: 'line-through',
  },
});
