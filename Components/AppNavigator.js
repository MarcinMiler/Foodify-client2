import React, { Component } from 'react'
import { View } from 'react-native'
import { DrawerNavigator, StackNavigator } from 'react-navigation'

import { createIconSetFromIcoMoon } from '@expo/vector-icons'
import icoMoonConfig from '../selection.json'
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon')

import TypeFood from './TypeFood'
import CartContainer from '../Containers/CartContainer'
import ProductsContainer from '../Containers/ProductsContainer'
import QuantityContainer from '../Containers/QuantityContainer'

import Drawer from './Drawer'

import ConfirmOrderContainer from '../Containers/ConfirmOrderContainer'
import ConfirmOrderContainer2 from '../Containers/ConfirmOrderContainer2'

const ProductNavigator = StackNavigator({
  Type: {
    screen: TypeFood,
  },
  Product: {
    screen: ProductsContainer
  },
  Quantity: {
    screen: QuantityContainer
  }
},{
  headerMode: 'none'
})

const CartNavigator = StackNavigator({
  Cart2: {
    screen: CartContainer
  },
  ConfirmOrder: {
    screen: ConfirmOrderContainer
  },
  ConfirmOrder2: {
    screen: ConfirmOrderContainer2
  }
},{
  headerMode: 'none'
})

const AppNavigator = DrawerNavigator({
  TypeFood: {
    screen: ProductNavigator
  },
  Cart: {
    screen: CartNavigator,
  },
},
  {
    contentComponent: Drawer,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
})
  
export default class AppNav extends Component {
  render() {
    return(
      <View style={{ flex: 1 }}>
        <AppNavigator />
      </View>
    )
  }
}
