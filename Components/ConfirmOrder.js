import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableNativeFeedback } from 'react-native'
import { LinearGradient } from 'expo'

import Nav from './Nav'

const ConfirmOrder = ({
    products,
    totalPrice,
    navigation
}) => {

    return(
        <LinearGradient style={styles.container} colors={['#AA00FF', '#CE31C4']}>

            <Nav navigation={navigation} title='Confirm Order' backIcon={true} />

            <View style={styles.container2}>
                <View>
                    <Text style={styles.title}>Your Order:</Text>


                </View>

                <View>

                    <View style={styles.toPay}>
                        <Text style={styles.toPayText}>To Pay:</Text>
                        <Text style={styles.price}>{totalPrice} $</Text>
                    </View>

                    <TouchableNativeFeedback onPress={() => navigation.navigate('ConfirmOrder2')}>
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
        fontSize: 20,
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