import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    description: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}

const ProductItem = (props: ProductItemProps) => {
  const {item} = props;
  return (
    <View style={styles.root}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
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
    marginVertical: 5,
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
