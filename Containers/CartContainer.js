import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteFromCart, updateQuantity } from '../Actions'
import { selectTotalPrice } from '../Reducers'

import Cart from '../Components/Cart'

class CartContainer extends Component {
    render() {
        const { cart, totalPrice, deleteFromCart, updateQuantity } = this.props
        return <Cart products={cart} totalPrice={totalPrice} deleteFromCart={deleteFromCart} updateQuantity={updateQuantity} />
    }
}

const mapStateToProps = state => ({
    cart: state.cart.products,
    totalPrice: selectTotalPrice(state)
})

const mapDispatchToProps = { deleteFromCart, updateQuantity }

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)