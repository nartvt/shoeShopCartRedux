import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {
  actionIncreaseQuantity,
  actionDecreaseQuantity,
  actionRemoveItem,
} from '../../redux/actions';

export class CartItem extends Component {
  decreaseCartItem = () => {
    this.props.dispatch(actionDecreaseQuantity(this.props.item.product.id));
  };
  increaseCartItem = () => {
    this.props.dispatch(actionIncreaseQuantity(this.props.item.product.id));
  };
  showAlert = id => {
    Alert.alert('Confirmation', 'Make sure for delete item ?', [
      {text: 'Cancel', onPress: () => {}},
      {
        text: 'OK',
        onPress: () => {
          this.removeItem();
        },
      },
    ]);
  };
  handleDecrease = () => {
    if (this.props.item.quantity > 1) {
      this.decreaseCartItem();
    } else {
      this.showAlert();
    }
  };
  removeItem = () => {
    this.props.dispatch(
      actionRemoveItem({
        id: this.props.item.product.id,
        callBack: this.showMessage,
      }),
    );
  };
  showMessage = () => {
    Alert.alert('Infomation', 'Remove Success ! ', [
      {text: 'Cancel', onPress: () => {}},
      {text: 'OK', onPress: () => {}},
    ]);
  };
  render() {
    const {item} = this.props;

    return (
      <View style={styles.cartItemContainer}>
        <Image source={{uri: item.product.img}} style={styles.image} />
        <View>
          <Text>Name: {item.product.name}</Text>
          <View style={styles.quantityButton}>
            <TouchableOpacity
              onPress={this.handleDecrease}
              style={styles.actionButton('gray', 30, 30)}>
              <Text>-</Text>
            </TouchableOpacity>
            <Text style={{margin: 10, fontSize: 10}}>{item.quantity}</Text>
            <TouchableOpacity
              onPress={this.increaseCartItem}
              style={styles.actionButton('gray', 30, 30)}>
              <Text>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.removeItem}
              style={styles.actionButton('red', 30, 30)}>
              <Text>Del</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const buttonStyles = (backgroundColor, width, height) => {
  return {
    margin: 15,
    backgroundColor,
    borderRadius: 50,
    width,
    height,
    justifyContent: 'center',
  };
};
const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 50,
    marginRight: 30,
  },
  actionButton: (backgroundColor, width, height) => ({
    margin: 15,
    backgroundColor,
    borderRadius: 50,
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  }),
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
