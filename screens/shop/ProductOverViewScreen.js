import React from 'react';
import {View, StyleSheet, Text, Button, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import ProductItem from '../../components/ProductItem'

const ProductOverviewScreen = props => {
    const products = useSelector(state => state.products.avialableProducts);
    return (
        <FlatList data={products}
            keyExtractor={item => item.id}
            renderItem={
            itemdata => 
                <ProductItem 
                    url={itemdata.item.imageUrl} 
                    title={itemdata.item.title}
                    price={itemdata.item.price}
                    onDetail={()=>{
                        props.navigation.navigate('ProductDetail', {
                            productTitle:  itemdata.item.title,
                            productId: itemdata.item.id
                        });
                    }}
                    onAddToCart={()=>{}}
                />
            }
        />
    );
}

const styles = StyleSheet.create({

});

ProductOverviewScreen.navigationOptions = {
    headerTitle: "All Products"
}


export default ProductOverviewScreen;