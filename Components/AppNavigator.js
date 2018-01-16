import React, { Component } from 'react'
import { View } from 'react-native'
import { DrawerNavigator, StackNavigator } from 'react-navigation'

import { createIconSetFromIcoMoon } from '@expo/vector-icons'
import icoMoonConfig from '../selection.json'
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon')

import TypeFood from './TypeFood'
import CartContainer from '../Containers/CartContainer'
import ProductsContainer from '../Containers/ProductsContainer'
import Drawer from './Drawer'

const AppNavigator = DrawerNavigator({
  TypeFood: {
    screen: TypeFood
  },
  Cart: {
    screen: CartContainer,
  },
  Product: {
    screen: ProductsContainer
  }
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
