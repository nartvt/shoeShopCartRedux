import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {withNavigation} from '@react-navigation/compat';

export class CartButton extends Component {
  goToCart = () => {
    this.props.navigation.navigate('Cart');
  };
  render() {
    return (
      <TouchableOpacity onPress={this.goToCart} style={styles.container}>
        <Icon name="shopping-cart" size={30} />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>0</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginRight: 20,
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#000',
    width: 15,
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

export default withNavigation(CartButton);
