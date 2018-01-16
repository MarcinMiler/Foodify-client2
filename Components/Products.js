import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import { LinearGradient } from 'expo'
import { Icon } from '../App'

import Nav from '../Components/Nav'

const Products = ({
    products,
    addToCart,
    navigation
}) => {
    
    return(
        <LinearGradient style={styles.container} colors={['#AA00FF', '#CE31C4']}>
            
            <Nav navigation={navigation} />

            

        </LinearGradient>
)}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
})

export default Products