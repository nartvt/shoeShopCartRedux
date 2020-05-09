import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

export class CartItem extends Component {
  decreaseCartItem = () => {
    this.props.dispatch({
      type: 'DECREASE_QUANTITY',
      payload: this.props.item.product.id,
    });
  };
  increaseCartItem = () => {
    this.props.dispatch({
      type: 'INCREASE_QUANTITY',
      payload: this.props.item.product.id,
    });
  };
  showAlert = () => {
    Alert.alert('Confirmation', 'Make sure for delete item ?', [
      {text: 'Cancel', onPress: () => {}},
      {text: 'OK', onPress: () => {}},
    ]);
  };
  handleDecrease = () => {
    if (this.props.item.quantity > 0) {
      this.decreaseCartItem();
    } else {
      this.showAlert();
    }
  };
  removeItem = () => {
    this.props.dispatch({
      type: 'REMOVE_CART_ITEM',
      payload: this.props.item.product.id,
    });
  };
  render() {
    const {item} = this.props;

    return (
      <View style={styles.cartItemContainer}>
        <Image source={{uri: item.product.img}} style={styles.image} />
        <View>
          <Text>Product Name: {item.product.name}</Text>
          <View style={styles.quantityButton}>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={this.handleDecrease}>
              <Text style={styles.buttonStyle}>-</Text>
            </TouchableOpacity>
            <Text style={{margin: 10, fontSize: 10}}>{item.quantity}</Text>
            <TouchableOpacity onPress={this.increaseCartItem}>
              <Text style={styles.buttonStyle}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.removeItem}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'red',
                }}>
                X
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 50,
    marginRight: 30,
  },
  buttonStyle: {
    fontSize: 20,
    backgroundColor: 'grey',
    borderRadius: 10,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  quantityButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default connect()(CartItem);
