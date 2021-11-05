import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProductItem = () => {
  return (
    <View style={styles.root}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg',
        }}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          Lorem ipsum dolor sit amet dfdfdfdfdf fdfdfd dfdf
        </Text>
        <View style={styles.ratingsContainer}>
          <FontAwesome
            style={styles.star}
            name="star"
            size={18}
            color={'#e47911'}
          />
          <FontAwesome
            style={styles.star}
            name="star"
            size={18}
            color={'#e47911'}
          />
          <FontAwesome
            style={styles.star}
            name="star"
            size={18}
            color={'#e47911'}
          />
          <FontAwesome
            style={styles.star}
            name="star-half-full"
            size={18}
            color={'#e47911'}
          />
          <FontAwesome
            style={styles.star}
            name="star-o"
            size={18}
            color={'#e47911'}
          />
          <Text>1,312</Text>
        </View>
        <Text style={styles.price}>
          from $12
          <Text style={styles.oldPrice}>$15</Text>
        </Text>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    margin: 10,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical:5
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
    alignItems: 'center'
  },
  star: {
    margin: 2
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
