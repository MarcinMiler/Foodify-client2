import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableWithoutFeedback } from 'react-native'

import { Icon } from '../App'

const Cart = ({
    products,
    totalPrice,
    deleteFromCart,
    updateQuantity
}) => {
    const listOfProducts = products.map((product, i) => {
        return(
            <View key={i} style={[styles.orderContainer, { marginTop: 0}]}>

                <TouchableWithoutFeedback onPress={() => deleteFromCart(product.id)}>
                    <Image source={require('../Images/salad2.jpg')} style={styles.image} />
                </TouchableWithoutFeedback>

                <View style={{marginLeft: 20}}>
                    <Text style={styles.orderTitle}>{product.name}</Text>
                    <Text style={styles.orderDescription}>Price: {product.price}$</Text>

                    <View style={{flex:1, flexDirection: 'row'}}>
                        <Text style={styles.orderDescription}>Quantity: {product.quantity}</Text>

                        <TouchableWithoutFeedback onPress={() => updateQuantity(product.id, -1)}>
                            <View style={styles.iconBorder}>
                                <Icon style={ styles.icon } name='minus' size={10} color='black' />
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => updateQuantity(product.id, 1)}>
                            <View style={styles.iconBorder}>
                                <Icon style={ styles.icon } name='plus' size={10} color='black' />
                            </View>
                        </TouchableWithoutFeedback>

                    </View>
                </View>
            </View>
        )
    })
    return(
        <ScrollView contentContainerStyle={styles.contentContainer}>
            
            { listOfProducts }
            <Text>{totalPrice}</Text>
        </ScrollView>
)}

const styles = StyleSheet.create({
    contentContainer: {
        padding: 20,
        backgroundColor: 'white',
        minHeight: '100%'
    },
    orderContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 23
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 15,
    },
    orderTitle: {
        fontSize: 24,
        fontFamily: 'montserratMedium',
    },
    orderDescription: {
        fontSize: 18,
        fontFamily: 'montserratRegular',
        marginTop: 15
    },
    iconBorder: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'black',
        width: 20,
        height: 20,
        padding: 4,
        marginTop: 15,
        marginLeft: 15
    }
})

export default Cart