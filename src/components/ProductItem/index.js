import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {actionAddToCart} from '../../redux/actions';
export class ProductItem extends Component {
  addToCart = () => {
    // dispath request to store for edit data of cart
    this.props.dispatch(actionAddToCart(this.props.product));
  };
  render() {
    let {product} = this.props;
    return (
      <View style={styles.productContainer}>
        <Image
          resizeMode="cover"
          source={{uri: product.img}}
          style={styles.imageStyle}
        />
        <Text> Name: {product.name}</Text>
        <Text> Price: {product.price}</Text>
        <TouchableOpacity style={styles.button} onPress={this.addToCart}>
          <Text>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  productContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
    margin: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    elevation: 6,
  },
  imageStyle: {
    height: 170,
    width: '100%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#00ffff',
    padding: 10,
    margin: 10,
    width: '95%',
    borderRadius: 30,
  },
});
const mapDispatchToProps = dispatch => {
  return {
    setProduct: product => {
      dispatch({
        // type is must be
        type: 'ADD_TO_CART',
        // payload is optional
        payload: product,
      });
    },
  };
};
export default connect()(ProductItem);
