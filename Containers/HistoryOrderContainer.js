import React, { Component } from 'react'
import { View } from 'react-native'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import HistoryOrder from '../Components/HistoryOrder'

class HistoryOrderContainer extends Component {
    render() {
        const { navigation } = this.props
        const { me } = this.props.data
        return(
            <View>
                { me && <HistoryOrder navigation={navigation} orders={me.orders} /> }
            </View>
        )
    }
}

const orderQuery = gql`
    query me {
        me {
            email,
            orders {
                id
                clientID
                date
                products{
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
    }
`

export default graphql(orderQuery)(HistoryOrderContainer)