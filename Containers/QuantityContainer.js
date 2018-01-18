import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../Actions'

import Quantity from '../Components/Quantity'

class QuantityContainer extends Component {
    
    state = {
        quantity: 1
    }

    handleChangeState = (key, value) => this.setState({[key]: value})

    addToCart = () => {
        const { id, name, price } = this.props.navigation.state.params.product
        this.props.addToCart(id, name, price, this.state.quantity)
    }

    render() {
        const { addToCart, navigation } = this.props
            return(
            <Quantity addToCart={this.addToCart} changeState={this.handleChangeState} quantity={this.state.quantity} navigation={navigation} />
        )
    }
}


const mapDispatchToProps = { addToCart }

export default connect(null, mapDispatchToProps)(QuantityContainer)