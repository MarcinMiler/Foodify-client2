import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import { LinearGradient } from 'expo'

import { Icon } from '../App'

const Products = ({
    products,
    addToCart
}) => {
    const listOfProducts = products.map((product, i) => {
        return(
            <LinearGradient key={i} elevation={5} style={styles.product} colors={['#5FFCFF', '#43FF9E']} start={[0.1, 1.0]} end={[1.0, 0.1]}>
            <Image source={require('../Images/salad2.jpg')} style={styles.img} />
            <View style={styles.productDescription}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>Price: {product.price}$</Text>
                
                <View style={styles.productButtons}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>More info</Text>
                    </View>

                    <TouchableWithoutFeedback onPress={() => addToCart(product.id, product.name, product.price) } >
                    <View style={styles.iconWrap}>
                        <Icon name='addcart' size={15} color='white' />
                    </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </LinearGradient>
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
    product: {
        borderRadius: 15,
        flexDirection: 'row',
        marginTop: 25
    },
    img:{
        width: 135,
        height: 135,
        borderRadius: 15,
    },
    productDescription:{
        marginTop: 5,
        marginLeft: 20
    },
    productName:{
        fontSize: 24,
        color: 'white',
        fontFamily: 'montserratMedium',
    },
    productPrice: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'montserratRegular',
        marginTop: 20,
    },
    productButtons:{
        flexDirection: 'row',
        marginTop: 20,
    },
    button:{
        borderRadius: 5,
        borderColor: 'white',
        borderWidth: 1,
        padding: 5
    },
    buttonText:{
        color: 'white',
        fontFamily: 'montserratRegular',
    },
    iconWrap:{
        borderRadius: 5,
        borderColor: 'white',
        borderWidth: 1,
        padding: 5,
        marginLeft: 50,
    },
})

export default Products