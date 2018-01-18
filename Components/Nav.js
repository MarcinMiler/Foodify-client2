import React from 'react'
import { View, ScrollView, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Icon } from '../App'

const Nav = ({
    navigation,
    backIcon,
    downIcon,
    title
}) => (
    <View style={styles.nav}>
        
        <View style={styles.wrap}>
            <Icon onPress={() => navigation.navigate('DrawerOpen')} name='menu' size={28} color='white' />
            <Text style={styles.title}>Foodify</Text>
            <Icon onPress={() => navigation.navigate('Cart')} name='cart' size={28} color='white' />
        </View>

        <View style={styles.wrap2}>

            { backIcon
                ? <Icon onPress={() => navigation.dispatch(NavigationActions.back())} style={styles.iconArrow} name='downArrow' size={25} color='white' />
                : <Icon name='downArrow' size={25} color='transparent' />
            }

            <Text style={styles.text}>{title}</Text>

            { downIcon
                ? <Icon name='search' size={25} color='white' />
                : <Icon name='search' size={25} color='transparent' />
            }

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
    wrap2: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'montserratRegular',
        fontSize: 20,
        color: '#fff',
        textAlign: 'center'
    },
    iconArrow: {
        width: 25,
        transform: [{ rotate: '90deg'}]
    }
})

export default Nav