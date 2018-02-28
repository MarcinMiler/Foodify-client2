import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setToken } from '../Actions'
import { View, ScrollView, Text, StyleSheet, TouchableNativeFeedback, AsyncStorage } from 'react-native'
import { LinearGradient } from 'expo'
import { NavigationActions } from 'react-navigation'

import { Icon } from '../App'

const Drawer = ({
    navigation,
    setToken
}) => {

    return(
        <LinearGradient style={styles.container} colors={['#AA00FF', '#CE31C4']}>

            <View style={styles.head}>
                <Text style={styles.title}>Foodify</Text>
                <Icon onPress={() => navigation.navigate('DrawerClose')} name='close' size={25} color='white' />
            </View>

            <View>

                <TouchableNativeFeedback onPress={() => navigation.navigate('Type')} delayPressIn={0}>
                    <View style={styles.bodyItem}>
                        <Icon name='home' size={25} color='white' />
                        <Text style={styles.bodyText}>Home</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={() => navigation.navigate('Cart')} delayPressIn={0}>
                    <View style={styles.bodyItem}>
                        <Icon name='cart' size={25} color='white' />
                        <Text style={styles.bodyText}>Cart</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={() => navigation.navigate('Orders')} delayPressIn={0}>
                    <View style={styles.bodyItem}>
                        <Icon name='calendar' size={25} color='white' />
                        <Text style={styles.bodyText}>Your Orders</Text>
                    </View>
                </TouchableNativeFeedback>

            </View>

            <View style={styles.footer}>

                <TouchableNativeFeedback onPress={async () => {
                    setToken('')
                    await AsyncStorage.removeItem('token')
                }}>
                    <View style={styles.footerButton}>
                        <Text style={styles.footerText}>Logout</Text>
                    </View>
                </TouchableNativeFeedback>
                
            </View>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
        padding: 20
    },
    title: {
        fontFamily: 'montserratRegular',
        color: '#fff',
        fontSize: 28
    },
    bodyItem: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    bodyText: {
        fontFamily: 'montserratRegular',
        color: '#fff',
        fontSize: 20,
        marginLeft: 20,
    },
    footer: {
        padding: 20
    },
    footerButton: {
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.35)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.35)',
        borderRadius: 3
    },
    footerText: {
        fontFamily: 'montserratRegular',
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    }
})

const mapDispatchToProps = { setToken }

export default connect(null, mapDispatchToProps)(Drawer)