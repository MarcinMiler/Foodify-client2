import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableWithoutFeedback, Button } from 'react-native'

import { Icon } from '../App'

const Cart = ({
    products,
    totalPrice,
    deleteFromCart,
    updateQuantity,
    navigation
}) => {
    const listOfProducts = products.map((product, i) => {
        return(
            <View key={i} style={(i === 0 ? [styles.orderContainer, { marginTop: 0 }] : styles.orderContainer )}>
 
                <Image source={require('../Images/salad2.jpg')} style={styles.image} />

                <View style={{marginLeft: 20}}>
                <View style={styles.wrap}>
                        <Text style={styles.orderTitle}>{product.name}</Text>
                        <Icon onPress={() => deleteFromCart(product.id)} style={styles.iconClose} name='plus' size={15} />
                    </View>

                    <Text style={styles.orderDescription}>Price: {product.price}$</Text>

                    <View style={{ flexDirection: 'row' }}>
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
            <View style={styles.hr}></View>
            <Text style={styles.totalPrice}>Total Price: {totalPrice}$</Text>

            <Button style={styles.button} title='Order' color='#3ccc2c' onPress={() => navigation.navigate('ConfirmOrder')} />
        </ScrollView>
)}

const styles = StyleSheet.create({
    contentContainer: {
        padding: 20,
    },
    orderContainer: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'flex-start',
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
    },
    wrap: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconClose: {
        transform: [{ rotate: '45deg' }],
        marginTop: 6,
    },
    hr: {
        width: '100%',
        height: 2,
        marginTop: 20,
        backgroundColor: 'black'
    },
    totalPrice: {
        marginTop: 10,
        textAlign: 'right',
        fontSize: 18,
        fontFamily: 'montserratMedium',
        marginBottom: 20,
    },
})

export default Cart