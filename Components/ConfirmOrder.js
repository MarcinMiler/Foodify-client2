import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableNativeFeedback } from 'react-native'
import { LinearGradient } from 'expo'

import Nav from '../Containers/NavContainer'

const ConfirmOrder = ({
    products,
    totalPrice,
    navigation
}) => {
    const listOfProducts = products.map(product => {
        return(
            <View key={product.id} style={styles.product}>
                <View style={styles.dot}></View>
                <Text style={styles.productPrice}>{product.name} (x{product.quantity})</Text>
            </View>
        )
    })
    return(
        <LinearGradient style={styles.container} colors={['#AA00FF', '#CE31C4']}>

            <Nav navigation={navigation} title='Confirm Order' backIcon={true} />

            <View style={styles.container2}>
                <View>
                    <Text style={styles.title}>Your Order:</Text>

                    { listOfProducts }
                </View>

                <View>

                    <View style={styles.toPay}>
                        <Text style={styles.toPayText}>To Pay:</Text>
                        <Text style={styles.price}>{totalPrice} $</Text>
                    </View>

                    <TouchableNativeFeedback onPress={() => navigation.navigate('Address')}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Next step</Text>
                        </View>
                    </TouchableNativeFeedback>

                </View>
            </View>

        </LinearGradient>
)}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    container2: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'montserratRegular',
        color: '#fff',
        fontSize: 24,
        marginBottom: 10
    },
    product: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    productPrice: {
        fontFamily: 'montserratRegular',
        color: '#fff',
        fontSize: 20,
        marginLeft: 10,
    },
    toPay: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 200,
        height: 100,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 20,
        padding: 20
    },
    toPayText: {
        fontFamily: 'montserratRegular',
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },
    price: {
        fontFamily: 'montserratRegular',
        color: '#fff',
        fontSize: 28,
        textAlign: 'center',
        marginTop: 10
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

export default ConfirmOrder