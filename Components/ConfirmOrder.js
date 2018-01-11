import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Button } from 'react-native'

const ConfirmOrder = ({
    products,
    totalPrice,
    newOrder
}) => {
    const listOfProducts = products.map((product, i) => {
        return(
            <Text key={i}>{product.name} x {product.quantity} </Text>
        )
    })
    return(
        <View>
            <Text style={styles.title}>Your Order</Text>

            {listOfProducts}

            <Text>Total Price: { totalPrice }</Text>

            <Button onPress={ newOrder } style={styles.button} title='Submit' color='#3ccc2c' />

        </View>
)}

const styles = StyleSheet.create({
    container: {

    },
    title: {
        fontSize: 24,
        fontFamily: 'montserratMedium',
        textAlign: 'center',
        marginTop: 20
    }
})

export default ConfirmOrder