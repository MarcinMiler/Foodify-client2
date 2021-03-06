import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Register from '../Components/Register'

class RegisterContainer extends Component {

    state = {
        email: '',
        password: '',
        password2: '',
        error: {}
    }

    handleChangeState = (key, value) => this.setState({ [key]: value })

    register = async () => {
        const { email, password, password2 } = this.state
        const valid = this.validateRegister(email, password, password2)

        if(valid.ok) {
            const registerResponse = await this.props.register({
                variables: {
                    email,
                    password
                },
            })
            if(!registerResponse.data.register.ok) this.setState({ error: { error: true, message: [registerResponse.data.register.error.message]} })
            
            return true
        }
        return false
    }

    validateRegister = (email, password, password2) => {
        let messages = []

        if(!email) messages = [...messages, 'Email is empty']
        else {
            let re = /\S+@\S+\.\S+/
            let emailTest = re.test(email)
            if(!emailTest) messages = [...messages, 'Email is incorrect']
        }

        if(!password) messages = [...messages, 'Password is empty']
        if(!password2) messages = [...messages, 'Second Password is empty']
        if(password !== password2) messages = [...messages, 'Passwords are not the same']

        if(messages.length > 0) {
            this.setState({ error: { error: true, messages } })
            return { ok: false, messages }
        }
        else return { ok: true }
    }

    render() {
        return <Register register={this.register} changeState={this.handleChangeState} navigation={this.props.navigation} error={this.state.error.messages} />
    }
}

const registerMutation = gql`
    mutation register($email: String!, $password: String!) {
        register(email: $email, password: $password) {
            ok,
            error {
                message
            }
        }
    }
`

export default graphql(registerMutation, { name: 'register'} )(RegisterContainer)