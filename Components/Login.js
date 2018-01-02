import React from 'react'

import { View, Text, StyleSheet, TextInput } from 'react-native'

const Login = ({
    state,
    changeState
}) => (
    <View style={styles.container}>

        <Text style={styles.title}>Login</Text>

        <Text>Email</Text>
        <TextInput
            onChangeText={text => changeState('loginEmail', text)}
        />

        <Text>Password</Text>
        <TextInput
            secureTextEntry={true}
            onChangeText={text => changeState('loginEmail', text)}
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    },
    title: {
        fontSize: 48,
        fontFamily: 'montserratRegular',
    },
    input: {

    }
})

export default Login