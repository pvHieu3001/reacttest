import React from 'react';
import {View, StyleSheet, Text, Button, Image} from 'react-native';
import { hide } from 'expo/build/launch/SplashScreen';

const ProductItem = props => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: props.url}} />
            </View>
            

            <View style={styles.detail}>
                <Text>{props.title}</Text>
                <Text>{props.price}</Text>
            </View>
            

            <View style={styles.buttonContainer}>
                <Button title='Add to cart' onPress={props.onAddToCart}/>
                <Button title='Detail' onPress={props.onDetail}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detail: {
        justifyContent: "center",
        alignItems: "center"
    },

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
        overflow: "hidden",
        backgroundColor: 'white',

    },

    imageContainer: {
        width: "100%",
        height: "60%",
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        overflow: "hidden"
    },
});

export default ProductItem;