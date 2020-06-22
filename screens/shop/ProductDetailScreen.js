import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {useSelector} from 'react-redux'

const ProductDetailScreen = props => {
    const ProductId = props.navigation.getParam('productId');
    const selectProduct = useSelector(state => state.products.avialableProducts.find(prod => prod.id === ProductId));
    return (
        <View>{selectProduct.title}</View>
    );
}

const styles = StyleSheet.create({

});

ProductDetailScreen.navigationOptions = navData=> {
    headerTitle: navData.navigation.getParam('productTitle')
}

export default ProductDetailScreen;