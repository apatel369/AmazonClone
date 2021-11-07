import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import product from '../../data/product';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/quantitySelector';
import Button from '../../components/button';
import ImageCarousel from '../../components/imageCarousel';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(
    product.options[0] || null,
  );
  const [quantity, setQuantity] = useState(1);

  console.log('selectedOption :>> ', selectedOption);
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>
      <ImageCarousel images={product.images}/>
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} />
        ))}
      </Picker>
      <Text style={styles.price}>
        from {product.price}
        {product.oldPrice ? (
          <Text style={styles.oldPrice}>{product.oldPrice}</Text>
        ) : null}
      </Text>
      <Text style={styles.description}>{product.description}</Text>
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <Button
        text={'Add to Cart'}
        onPress={() => {
          console.log('add');
        }}
      />
      <Button
        text={'Buy Now'}
        onPress={() => {
          console.log('buy :>> ');
        }}
      />
    </ScrollView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  root:{
    padding:10,
    backgroundColor:'white'
  },
  price:{
    fontSize:18,
    fontWeight:'bold'
  },
  oldPrice:{
    fontSize:12,
    textDecorationLine:'line-through'
  },
  description: {
    marginVertical:10,
    lineHeight:20
  },
});
