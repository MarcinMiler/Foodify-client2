import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import { LinearGradient } from 'expo'
import { Icon } from '../App'

import Nav from '../Containers/NavContainer'

const Products = ({
    products,
    addToCart,
    navigation,
    filter
}) => {
    const listOfProducts = products.filter(p => p.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0).map(product => {
        return(
            <TouchableWithoutFeedback key={product.id} onPress={() => navigation.navigate('Quantity', { product })}>
                <View style={styles.product}>

                    <View style={styles.wrapImage}>
                        <Image style={styles.image} source={{uri: `http://192.168.8.101:4000/uploads/${product.url}`}} />
                    </View>

                    <Text style={styles.name}>{product.name}</Text>

                    <View style={styles.stars}>
                        <Icon style={styles.star} name='star' size={15} color='white' />
                        <Icon style={styles.star} name='star' size={15} color='white' />
                        <Icon style={styles.star} name='star' size={15} color='white' />
                    </View>

                    <Text style={styles.price}>Add {product.price} $</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    })
    return(
        <LinearGradient style={styles.container} colors={['#AA00FF', '#CE31C4']}>
            
            <Nav navigation={navigation} backIcon={true} downIcon={true} title='Choose Products' />

            <ScrollView contentContainerStyle={styles.contentContainer}>
                { listOfProducts }
            </ScrollView>

        </LinearGradient>
)}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 10,
    },
    product: {
        width: '40%',
        height: 200,
        marginBottom: 30,
        marginLeft: '5%',
        marginRight: '5%',
        backgroundColor: 'rgba(255,255,255,0.25)',
        borderWidth: 1,
        borderRadius: 3,
        borderColor: 'rgba(255,255,255,0.25)',
        justifyContent: 'center'
    },
    wrapImage: {
        justifyContent: 'center'
    },
    image: {
        width: 130,
        height: 100,
        resizeMode: 'contain',
        marginLeft: 7
    },
    name: {
        fontFamily: 'montserratRegular',
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    },
    stars: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10
    },
    star: {
        marginLeft: 4
    },
    price: {
        fontFamily: 'montserratRegular',
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    }
})

export default Products