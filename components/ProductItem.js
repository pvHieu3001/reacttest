import React from 'react';
import {View, StyleSheet, Text, Button, Image} from 'react-native';
import { hide } from 'expo/build/launch/SplashScreen';

const ProductItem = props => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: props.url}} />
        
            <Text>{props.title}</Text>
            <Text>{props.price}</Text>

            <View style={styles.buttonContainer}>
                <Button title='Add to cart' onPress={props.onAddToCart}/>
                <Button title='Detail' onPress={props.onDetail}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    image: {
        width: '100%',
        height: '60%'
    },
    container:{
        height: 300,
        borderRadius: 10,
        shadowRadius: 8,
        shadowOpacity: 0.26,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        elevation: 5,
        margin: 20,
        overflow: "hidden"
    }
});

export default ProductItem;