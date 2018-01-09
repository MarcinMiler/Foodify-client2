import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'

import { Icon } from '../App'

const Cart = ({
    products,
    deleteFromCart,
    updateQuantity
}) => {
    const listOfProducts = products.map((product, i) => {
        return(
            <View key={i} style={[styles.orderContainer, { marginTop: 0}]}>

                <Image source={require('../Images/salad2.jpg')} style={styles.image} />

                <View style={{marginLeft: 20}}>
                    <Text style={styles.orderTitle}>{product.name}</Text>
                    <Text style={styles.orderDescription}>Price: {product.price}$</Text>

                    <View style={{flex:1, flexDirection: 'row'}}>
                        <Text style={styles.orderDescription}>Quantity: {product.quantity}</Text>
                        <View style={styles.iconBorder}>
                            <Icon style={ styles.icon } name='minus' size={10} color='black' />
                        </View>

                        <View style={styles.iconBorder}>
                            <Icon style={ styles.icon } name='plus' size={10} color='black' />
                        </View>
                    </View>
                </View>
            </View>
        )
    })
    return(
        <ScrollView contentContainerStyle={styles.contentContainer}>
            
            { listOfProducts }
            
        </ScrollView>
)}

const styles = StyleSheet.create({
    contentContainer: {
        padding: 20,
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