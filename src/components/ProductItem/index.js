import React, {Component} from 'react';
import {Text, View, Image, Button, StyleSheet} from 'react-native';

export class ProductItem extends Component {
  render() {
    let {product} = this.props;
    console.log(product.img);
    return (
      <View>
        <Text> Image</Text>
        <Image
          resizeMode="cover"
          source={{uri: product.img}}
          style={styles.imageStyle}
        />
        <Text> Name {product.name}</Text>
        <Text> Price {product.price}</Text>
        <Button title="Add to Cart" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 100,
    width: 100,
  },
});

export default ProductItem;
