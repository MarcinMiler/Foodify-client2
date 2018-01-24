import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { setToken } from '../Actions'
import { DrawerNavigator, StackNavigator } from 'react-navigation'

import { createIconSetFromIcoMoon } from '@expo/vector-icons'
import icoMoonConfig from '../selection.json'
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon')

import TypeFood from './TypeFood'
import CartContainer from '../Containers/CartContainer'
import ProductsContainer from '../Containers/ProductsContainer'
import QuantityContainer from '../Containers/QuantityContainer'
import HistoryOrderContainer from '../Containers/HistoryOrderContainer'
import Drawer from './Drawer'

import ConfirmOrderContainer from '../Containers/ConfirmOrderContainer'
import AddressContainer from '../Containers/AddressContainer'
import LoginContainer from '../Containers/LoginContainer'
import RegisterContainer from '../Containers/RegisterContainer'

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
  Address: {
    screen: AddressContainer
  }
},{
  headerMode: 'none'
})

const LoginNavigator = StackNavigator({
  Loginn: {
    screen: LoginContainer
  },
  Register: {
    screen: RegisterContainer
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
  Orders: {
    screen: HistoryOrderContainer
  },
},
  {
    contentComponent: Drawer,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
})
  
class AppNav extends Component {

  async componentWillMount() {
    let token = await AsyncStorage.getItem('token')
    if(token) this.props.setToken(token)
  }

  render() {
    return(
      <View style={{ flex: 1 }}>
        { this.props.token ? <AppNavigator /> : <LoginNavigator /> }
      </View>
    )
  }
}

const mapStateToProps = state => ({
  token: state.auth.token
})

const mapDispatchToProps = { setToken }

export default connect(mapStateToProps, mapDispatchToProps)(AppNav)
