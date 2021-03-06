import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableNativeFeedback, TextInput } from 'react-native'
import { LinearGradient } from 'expo'
import { Icon } from '../App'

import Nav from '../Containers/NavContainer'

const HistoryOrder = ({
    navigation,
    orders
}) => {
    let count = orders.length + 1

    const listOfOrders = orders.slice().reverse().map(order => {
        let icon = ''
        let text = ''
        
        switch(order.orderStatus) {
            case 'Order placed':
                icon = 'check2'
                text = 'You order was placed'
                break
            case 'Order confirmed':
                icon = 'check3'
                text = 'Your order has benn confirmed'
                break
            case 'Order preparing':
                icon = 'check4'
                text = 'Your order is preparing'
                break
            case 'Order in delivery':
                icon = 'truck'
                text = 'Your order is in delivery'
                break
            case 'Order complete':
                icon = 'gift'
                text = 'Order complete, Bon Apetit :)'
                break                
        }
        count--
        return(
            <TouchableNativeFeedback key={order.id} delayPressIn={0}>
                <View key={order.id} style={styles.order}>

                    <View style={styles.header}>
                        <Text style={styles.orderID}>Order {count}</Text>
                        <Text style={styles.orderDate}>Date: {order.date}</Text>
                    </View>

                    <View style={styles.orderStatus}>
                        <Icon name={icon} size={25} color='white' />
                        <View>
                            <Text style={styles.orderStatusText}>{order.orderStatus}</Text>
                            <Text style={styles.orderStatusText2}>{text}</Text>
                        </View>
                    </View>
                </View>
            </TouchableNativeFeedback>
        )
    })
    return(
        <LinearGradient style={styles.container} colors={['#AA00FF', '#CE31C4']}>

            <Nav navigation={navigation} title='Track Order' />

            <ScrollView contentContainerStyle={styles.contentContainer}>

                { listOfOrders }

            </ScrollView>
            
        </LinearGradient>
)}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    contentContainer: {
        padding: 20
    },
    order: {
        marginBottom: 30,
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.25)',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'rgba(255,255,255,0.25)',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    orderID: {
        fontFamily: 'montserratRegular',
        color: '#fff',
        fontSize: 20,
    },
    orderDate: {
        fontFamily: 'montserratRegular',
        color: '#fff',
        fontSize: 18,
    },
    orderStatus: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    orderStatusText: {
        fontFamily: 'montserratRegular',
        color: '#fff',
        fontSize: 18,
        marginLeft: 10
    },
    orderStatusText2: {
        fontFamily: 'montserratRegular',
        color: '#fff',
        fontSize: 14,
        marginLeft: 10,
    }
})

export default HistoryOrder