import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearCart } from '../Actions'
import { selectTotalPrice } from '../Reducers'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import Address from '../Components/Address'

class AddressContainer extends Component {

    state = {
        address: '',
        postalCode: '',
        phoneNumber: '',
        formError: {}
    }

    handleChangeState = (key, value) => this.setState({ [key]: value })

    newOrder = async () => {
        const valid = this.validate()

        if(valid.ok) {
            const { address, postalCode, phoneNumber } = this.state 

            const listOfProducts = this.props.cart.map(p => {
                return { productID: p.id, quantity: p.quantity }
            })

            const response = await this.props.newOrder({
                variables: {
                    products: listOfProducts,
                    address,
                    postalCode,
                    phoneNumber,
                    totalPrice: this.props.totalPrice
                },
                update: (store, { data: { newOrder } }) => {
                    const query = gql`
                        {
                            me {
                                orders {
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
                        }
                    `
                    let data = store.readQuery({
                        query
                    })
                    data.me.orders.push(newOrder)
                    store.writeQuery({
                        query,
                        data
                    })
                }
            })
            if(response) this.props.clearCart()
        }
    }

    validate = () => {
        const { address, postalCode, phoneNumber } = this.state
        let messages = []

        if(!address) messages = [...messages, 'Address is empty']
        if(!postalCode) messages = [...messages, 'Postal code is empty']
        if(!phoneNumber) messages = [...messages, 'Phone number is empty']

        if(messages.length > 0) {
            this.setState({ formError: { error: true, messages } })
            return { ok: false, messages }
        }
        else return { ok: true }
    }

    render() {
        return <Address changeState={this.handleChangeState} newOrder={this.newOrder} navigation={this.props.navigation} />
    }
}

const newOrderMutation = gql`
    mutation newOrder($products: [ProcutsInput] $address: String! $postalCode: String! $phoneNumber: String! $totalPrice: Int!) {
        newOrder(products: $products, address: $address, postalCode: $postalCode, phoneNumber: $phoneNumber totalPrice: $totalPrice) {
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

const mapStateToProps = state => ({
    cart: state.cart.products,
    totalPrice: selectTotalPrice(state)
})

const mapDispatchToProps = { clearCart }

export default compose(
    graphql(newOrderMutation, { name: 'newOrder' }),
    connect(mapStateToProps, mapDispatchToProps)
)(AddressContainer)