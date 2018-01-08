import React, { Component } from 'react'
import { View } from 'react-native'
import { Asset, AppLoading } from 'expo'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Products from '../Components/Products'

class ProductsContainer extends Component {
    render() {
        const { products } = this.props.data
        return <View>{ products && <Products products={products} /> }</View>
    }
}

const productsQuery = gql`
    query products($category: String!) {
        products(category: $category) {
            name,
            price,
            category
        }
    }
`

export default graphql(productsQuery, {
    options: props => ({ variables: { category: props.navigation.state.params.category } }),
})(ProductsContainer)