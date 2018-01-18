import React from 'react'
import { View, ScrollView, Text, StyleSheet, TouchableNativeFeedback, Slider } from 'react-native'
import { LinearGradient } from 'expo'

import Nav from './Nav'

const Quantity = ({
    addToCart,
    changeState,
    quantity,
    navigation,
}) => (
    <LinearGradient style={styles.container} colors={['#AA00FF', '#CE31C4']}>
        
        <Nav navigation={navigation} backIcon={true} title='How many?' />

        <View style={styles.wrap}>
            <Slider onValueChange={val => changeState('quantity', val)} minimumValue={1} maximumValue={20} step={1} />
            <Text style={styles.text}>{quantity}</Text>

            <TouchableNativeFeedback onPress={ addToCart }>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Add to cart</Text>
                </View>
            </TouchableNativeFeedback>
        </View>

    </LinearGradient>
)

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    wrap: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between'
    },
    text: {
        fontFamily: 'montserratRegular',
        color: '#fff',
        fontSize: 54,
        textAlign: 'center'
    },
    button: {
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.25)',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'rgba(255,255,255,0.25)',
    },
    buttonText: {
        fontFamily: 'montserratRegular',
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default Quantity