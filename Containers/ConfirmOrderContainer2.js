import React, { Component } from 'react'
import { connect } from 'react-redux'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import ConfirmOrder2 from '../Components/ConfirmOrder2'

class ConfirmOrderContainer2 extends Component {

    state = {
        place: '',
        postalCode: '',
        phoneNumber: ''
    }

    handleChangeState = (key, value) => this.setState({ [key]: value })

    newOrder = () => {
        console.log('lol')
    }

    render() {
        return(
            <ConfirmOrder2 changeState={this.handleChangeState} newOrder={this.newOrder} navigation={this.props.navigation} />
        )
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
})

export default compose(
    graphql(newOrderMutation, { name: 'newOrder' }),
    connect(mapStateToProps, null)
)(ConfirmOrderContainer2)