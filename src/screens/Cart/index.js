import React, {Component} from 'react';
import {Text, View} from 'react-native';
import CartItem from '../../components/CartItem';
import {connect} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList} from 'react-native-gesture-handler';

export class CartScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.props.cartList}
          renderItem={({item}) => <CartItem item={item} />}
          keyExtractor={(item, index) => `${item.product.id + index}`}
        />
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => {
  return {
    cartList: state.carts,
  };
};

export default connect(mapStateToProps)(CartScreen);
