import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

export class CartItem extends Component {
  decreaseCartItem = () => {
    this.product.dispatch({
      type: 'DECREASE_QUANTITY',
      payload: this.props.item.product.id,
    });
  };
  increaseCartItem = () => {
    this.product.dispatch({
      type: 'INCREASE_QUANTITY',
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
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 20,
                  backgroundColor: 'grey',
                  borderRadius: 10,
                  width: 10,
                }}>
                -
              </Text>
            </TouchableOpacity>
            <Text style={{margin: 10, fontSize: 10}}>{item.quantity}</Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  backgroundColor: 'grey',
                  borderRadius: 10,
                }}>
                +
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
    width: 50,
    height: 50,
  },
  quantityButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default connect()(CartItem);
