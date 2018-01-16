import React from 'react'
import { View, ScrollView, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'

import { Icon } from '../App'

const Nav = ({
    navigation
}) => (
    <View style={styles.nav}>
        
        <View style={styles.wrap}>
            <Icon onPress={() => navigation.navigate('DrawerOpen')} name='menu' size={28} color='white' />
            <Text style={styles.title}>Foodify</Text>
            <Icon onPress={() => navigation.navigate('Cart')} name='cart' size={28} color='white' />
        </View>

        <View>
            <Text style={styles.text}>Choose Type of Food</Text>
        </View>

    </View>
)

const styles = StyleSheet.create({
    nav: {
        backgroundColor: 'transparent',
        marginTop: 23,
        padding: 20,
    },
    wrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'montserratRegular',
        color: '#fff',
        fontSize: 28
    },
    text: {
        fontFamily: 'montserratRegular',
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        marginTop: 25
    }
})

export default Nav