import React, { Component } from 'react'
import { View } from 'react-native'
import { Asset, AppLoading } from 'expo'
import { connect } from 'react-redux'
import { addToCart } from '../Actions'

import { graphql, compose } from '../node_modules/react-apollo'
import gql from 'graphql-tag'

import Products from '../Components/Products'

class ProductsContainer extends Component {
    render() {
        const { products } = this.props.data
        return(
            <View>
                { products && <Products products={products} filter={this.props.filter} addToCart={this.props.addToCart} navigation={this.props.navigation} /> }
            </View>
        )
    }
}

const productsQuery = gql`
    query products($category: String!) {
        products(category: $category) {
            id,
            name,
            price,
            category
        }
    }
`
const mapStateToProps = state => ({
    filter: state.app.filter
})

const mapDispatchToProps = { addToCart }

export default compose(
    graphql(productsQuery, {
        options: props => ({ variables: { category: props.navigation.state.params.category } }),
    }),
    connect(mapStateToProps, mapDispatchToProps)
)(ProductsContainer)