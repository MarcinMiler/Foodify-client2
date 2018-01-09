import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteFromCart, updateQuantity } from '../Actions'

import Cart from '../Components/Cart'

class CartContainer extends Component {
    render() {
        const { cart, deleteFromCart, updateQuantity } = this.props
        return <Cart products={cart} deleteFromCart={deleteFromCart} updateQuantity={updateQuantity} />
    }
}

const mapStateToProps = state => ({
    cart: state.cart.products
})

const mapDispatchToProps = { deleteFromCart, updateQuantity }

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)