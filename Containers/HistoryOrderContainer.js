import React, { Component } from 'react'
import { View } from 'react-native'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import HistoryOrder from '../Components/HistoryOrder'

class HistoryOrderContainer extends Component {

    componentDidMount() {
        // this.props.myOrders.startPolling(10000)
        this.subscribe()
    }

    subscribe = () => {
        this.props.myOrders.subscribeToMore({
            document: newStatusSubscription,
            updateQuery: (prev, data) => {
                console.log(prev, data, 'lol')
            }
        })
    }

    render() {
        const { navigation } = this.props
        const { myOrders } = this.props.myOrders
        console.log(this.props, 'truck')
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
    subscription newStatus {
        newStatus {
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

export default graphql(orderQuery, { name: 'myOrders' })(HistoryOrderContainer)