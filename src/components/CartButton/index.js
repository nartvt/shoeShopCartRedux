import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {withNavigation} from '@react-navigation/compat';
import {connect} from 'react-redux';

export class CartButton extends Component {
  state = {
    productTotal: 0,
  };
  goToCart = () => {
    this.props.dispatch({
      type: 'SHOW_CART_ITEM',
    });
    this.props.navigation.navigate('Cart');
  };
  render() {
    return (
      <TouchableOpacity onPress={this.goToCart} style={styles.container}>
        <Icon name="shopping-cart" size={20} />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{this.countsProducts()}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  //   componentDidMount = prevProps => {
  //     if (
  //       this.countsProduct(prevProps.cartList) >
  //       this.countsProduct(this.props.cartList)
  //     ) {
  //       this.setState({
  //         productTotal: this.countsProduct(this.props.cartList),
  //       });
  //     }
  //   };
  countsProducts = () => {
    let count = 0;
    if (this.props.cartList.length > 0) {
      count = this.props.cartList.reduce((sum, currentItem) => {
        return sum + currentItem.quantity;
      }, 0);
    }
    return count;
  };
}
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginRight: 40,
    padding: 10,
  },
  badge: {
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: '#ff0000',
    width: 20,
    height: 15,
    borderRadius: 20,
  },
  badgeText: {
    color: '#fff',
    textAlign: 'center',
    lineHeight: 15,
    fontWeight: 'bold',
  },
});

// es5
// const mapStateToProps = state => {
//   return {
//     cartList: state.carts,
//   };
// };

// es6
const mapStateToProps = state => ({
  cartList: state.carts,
});

export default withNavigation(connect(mapStateToProps)(CartButton));
