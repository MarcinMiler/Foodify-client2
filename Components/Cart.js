import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableWithoutFeedback, Button, TouchableNativeFeedback } from 'react-native'
import { LinearGradient } from 'expo'
import { Icon } from '../App'

import Nav from './Nav'

const Cart = ({
    products,
    totalPrice,
    deleteFromCart,
    updateQuantity,
    navigation
}) => {
    console.log(products)
    const listOfProducts = products.map(product => {
        return(
            <View key={product.id} style={styles.product}>
                
                
                <Image style={styles.image} source={require('../Images/s2.png')} />
                

                <View style={styles.description}>

                    <View style={styles.wrapName}>
                        <Text style={styles.name}>{product.name}</Text>
                        <Icon name='close' size={25} color='white' />
                    </View>

                    <Text style={styles.price}>Price: {product.price} $</Text>

                    <View style={styles.quantity}>
                        <Text style={styles.quantityText}>Quantity:</Text>
                        <View style={styles.wrapIcons}>
                            <Icon name='minus' size={25} color='white' />
                            <Text style={styles.quantityText}>{product.quantity}</Text>
                            <Icon name='plus' size={25} color='white' />
                        </View>
                    </View>

                </View>
                

            </View>
        )
    })
    return(
        <LinearGradient style={styles.container} colors={['#AA00FF', '#CE31C4']}>

            <Nav navigation={navigation} backIcon={true} title='Cart' />

            <ScrollView contentContainerStyle={styles.contentContainer}>

                { listOfProducts }

            </ScrollView>

            <View style={styles.footer}>
                <Text style={styles.totalPrice}>Total Price: {totalPrice} $</Text>
                <TouchableNativeFeedback>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Order</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>

        </LinearGradient>
)}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    contentContainer: {
        paddingTop: 20,
    },
    product: {
        flexDirection: 'row',
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
        backgroundColor: 'rgba(255,255,255,0.25)',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'rgba(255,255,255,0.25)',
        marginBottom: 20
    },
    wrap: {
        
    },
    image: {
        width: 130,
        height: 100,
        resizeMode: 'contain',
        marginLeft: 7
    },
    description: {
        justifyContent: 'space-around',
        marginLeft: 10
    },
    wrapName: {
        width: '62%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        fontFamily: 'montserratRegular',
        color: '#fff',
        fontSize: 20,
    },
    price: {
        fontFamily: 'montserratRegular',
        color: '#fff',
        fontSize: 20,
    },
    quantity: {
        flexDirection: 'row'
    },
    quantityText: {
        fontFamily: 'montserratRegular',
        color: '#fff',
        fontSize: 20,
    },
    wrapIcons: {
        width: 100,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    footer: {
        paddingTop: 0,
        padding: 20
    },
    totalPrice: {
        padding: 20,
        fontFamily: 'montserratRegular',
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },
    button: {
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.35)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.35)',
        borderRadius: 3
    },
    buttonText: {
        fontFamily: 'montserratRegular',
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default Cart