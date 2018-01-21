import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectTotalPrice } from '../Reducers'

import ConfirmOrder from '../Components/ConfirmOrder'

class ConfirmOrderContainer extends Component {
    render() {
        const { cart, totalPrice, navigation } = this.props
        return <ConfirmOrder products={cart} totalPrice={totalPrice} navigation={navigation} />
    }
}

const mapStateToProps = state => ({
    cart: state.cart.products,
    totalPrice: selectTotalPrice(state)
})

export default connect(mapStateToProps, null)(ConfirmOrderContainer)