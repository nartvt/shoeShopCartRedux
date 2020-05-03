import React, {Component} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import ProductItem from '../../components/ProductItem';

export class HomeScreen extends Component {
  render() {
    const {productCollections} = this.props;
    return (
      <SafeAreaView>
        <FlatList
          data={productCollections}
          renderItem={({item}) => <ProductItem product={item} />}
          keyExtractor={(item, index) => `${item.id + index}`}
        />
      </SafeAreaView>
      //   <ProductItem />
    );
  }
}

const mapStateToProps = state => {
  return {
    productCollections: state.products,
  };
};

export default connect(mapStateToProps)(HomeScreen);
