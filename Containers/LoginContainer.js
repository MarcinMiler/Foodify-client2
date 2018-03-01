import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setToken } from '../Actions'
import { AsyncStorage } from 'react-native'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'

import Login from '../Components/Login'
import Register from '../Components/Register'

class LoginContainer extends Component {

    state = {
        email: '',
        password: '',
        error: {},
    }

    handleChangeState = (key, value) => this.setState({ [key]: value })

    login = async () => {
        const { email, password } = this.state
        const valid = this.validateLogin(email, password)

        if(valid.ok) {
            const loginResponse = await this.props.login({
                variables: {
                    email,
                    password
                }
            })

            if(loginResponse.data.login.ok) {
                const { token } = loginResponse.data.login
                this.props.setToken(token)
                await AsyncStorage.setItem('token', token)
            }
            else this.setState({ error: { error: true, messages: [loginResponse.data.login.error.message]} })
        }
    }

    validateLogin = (email, password) => {
        let messages = []

        if(!email) messages = [...messages, 'Email is empty']

        else {
            let re = /\S+@\S+\.\S+/
            let emailTest = re.test(email)

            if(!emailTest) messages = [...messages, 'Email is incorrect']
        }

        if(!password) messages = [...messages, 'Password is empty']

        if(messages.length > 0) {
            this.setState({ error: { error: true, messages } })
            return { ok: false, messages }
        }
        else return { ok: true }
    }

    render() {
        return <Login login={this.login} changeState={this.handleChangeState} navigation={this.props.navigation} error={this.state.error.messages} />
    }
}

const loginMutation = gql`
  mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
          ok,
          token,
          error {
              message
          }
      }
  }
`

const mapDispatchToProps = { setToken }

export default compose(
    graphql(loginMutation, { name: 'login' } ),
    connect(null, mapDispatchToProps)
)(LoginContainer)