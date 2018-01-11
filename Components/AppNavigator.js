import React, { Component } from 'react'
import { View } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'

import { createIconSetFromIcoMoon } from '@expo/vector-icons'
import icoMoonConfig from '../selection.json'
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon')

import TypeFood from './TypeFood'
import ProductsContainer from '../Containers/ProductsContainer'
import CartContainer from '../Containers/CartContainer'
import ConfirmOrderContainer from '../Containers/ConfirmOrderContainer'
import User from './User'

const ProductNavigator = StackNavigator({
  Type: {
    screen: TypeFood,
    navigationOptions: {
      headerStyle: {
        marginTop: 24,
      },
      headerTitleStyle: {
        alignSelf: 'center',
      },
      title: 'Choose Type of Food'
    }
  },
  Products: {
    screen: ProductsContainer,
    navigationOptions: {
      headerStyle: {
        marginTop: 24,
      },
      headerTitleStyle: {
        alignSelf: 'center',
        left: -20
      },
      title: 'Products'
    }
  },
})

const CartNavigator = StackNavigator({
  Cart: {
    screen: CartContainer,
    navigationOptions: {
      headerStyle: {
        marginTop: 24,
      },
      headerTitleStyle: {
        alignSelf: 'center',
      },
      title: 'Cart'
    },
  },
  ConfirmOrder: {
    screen: ConfirmOrderContainer,
    navigationOptions: {
      headerStyle: {
        marginTop: 24,
      },
      headerTitleStyle: {
        alignSelf: 'center',
      },
      title: 'Confirm Order'
    },
  }
})

const UserNavigator = StackNavigator({
  User: {
    screen: User,
    navigationOptions: {
      headerStyle: {
        marginTop: 24,
      },
      headerTitleStyle: {
        alignSelf: 'center',
      },
      title: 'User'
    }
  }
})

const AppNavigator = TabNavigator({
    Product: {
      screen: ProductNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name='home' size={16} color='black' />
      }
    },
    Cart: {
      screen: CartNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name='cart' size={16} color='black' />
      }
    },
    User: {
      screen: UserNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name='user' size={16} color='black' />
      }
    },
},{
    tabBarPosition: 'bottom',
    initialRouteName: 'Product',
    tabBarOptions: {
      activeTintColor: '#e91e63',
      showIcon: true,
      showLabel: false,
      labelStyle: {
        fontSize: 12,
        color: 'black'
      },
      indicatorStyle: {
        backgroundColor: 'red'
      },
      style: {
        backgroundColor: 'white',
      },
    }
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
