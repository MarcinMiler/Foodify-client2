import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import HistoryOrder from '../Components/HistoryOrder'

class HistoryOrderContainer extends Component {

    componentDidMount = async () => {
        this.unsubscribe = await this.subscribe()
    }

    componentWillUnmount() {
        if (this.unsubscribe) this.unsubscribe()
    }

    subscribe = async () => {
        let token = await AsyncStorage.getItem('token')
        return this.props.myOrders.subscribeToMore({
            document: newStatusSubscription,
            variables: { token }
        })
    }

    render() {
        const { navigation } = this.props
        const { myOrders } = this.props.myOrders
        return(
            <View>
                { myOrders && <HistoryOrder navigation={navigation} orders={myOrders} /> }
            </View>
        )
    }
}

const orderQuery = gql`
    query myOrders {
        myOrders {
            id
            clientID
            date
            products {
              productID
              quantity
            }
            totalPrice
            orderStatus
            address
            postalCode
            phoneNumber
        }
    }
`
const newStatusSubscription = gql`
    subscription newStatus($token: String!) {
        newStatus(token: $token) {
            id
            clientID
            date
            products {
              productID
              quantity
            }
            totalPrice
            orderStatus
            address
            postalCode
            phoneNumber
        }
    }
`

export default graphql(orderQuery, { name: 'myOrders', options: { fetchPolicy: 'network-only' } })(HistoryOrderContainer)