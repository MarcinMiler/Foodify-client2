import React, { Component } from 'react'
import { connect } from 'react-redux'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import { selectTotalPrice } from '../Reducers'

import ConfirmOrder from '../Components/ConfirmOrder'

class ConfirmOrderContainer extends Component {

    state = {
        adress: ''
    }

    handleChangeState = (key, value) => this.setState({ [key]: value })

    render() {
        console.log(this.props)
        const { cart, totalPrice, newOrder } = this.props
        return <ConfirmOrder products={cart} totalPrice={totalPrice} changeState={this.handleChangeState} newOrder={newOrder} />
    }
}

const newOrderMutation = gql`
    mutation newOrder($products: [ProcutsInput], $adress: String!, $totalPrice: Float!) {
        newOrder(products: $products, adress: $adress, totalPrice: $totalPrice) {
            id
        }
    }
`

const mapStateToProps = state => ({
    cart: state.cart.products,
    totalPrice: selectTotalPrice(state)
})

export default compose(
    graphql(newOrderMutation, { name: 'newOrder' }),
    connect(mapStateToProps, null)
)(ConfirmOrderContainer)