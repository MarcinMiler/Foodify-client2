import React from 'react'
import { LinearGradient } from 'expo'
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native'

const Login = ({
    screenProps: {
        login,
        register,
        state,
        changeState,
        addProduct
    },
    navigation
}) => (
    <LinearGradient style={styles.container} colors={['#C45FFF', '#8819FF']} start={[1.0, 1.0]} end={[0.1, 0.1]}>

        <Text style={styles.title}>Foodify</Text>

        <Text style={styles.login}>Login</Text>

        <TextInput
            style={styles.input}
            onChangeText={text => changeState('loginEmail', text)}
            placeholder="Email"
            placeholderTextColor="lightgray"
            underlineColorAndroid='transparent'
        />

        <TextInput
            style={styles.input}
            onChangeText={text => changeState('loginPassword', text)}
            placeholder="Password"
            placeholderTextColor="lightgray"
            underlineColorAndroid='transparent'
        />

        <TouchableWithoutFeedback onPress={ login }>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Login Now</Text>
            </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('Register')}>
            <View style={[styles.button, { marginTop: 150 }]}>
                <Text style={styles.buttonText}>Register</Text>
            </View>
        </TouchableWithoutFeedback>

    </LinearGradient>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 48,
        fontFamily: 'montserratMedium',
        marginTop: 50,
        color: '#fff',
        textAlign: 'center',
    },
    login:{
        color: 'lightgray',
        fontSize: 24,
        textAlign: 'center',
        marginTop: 100,
        fontFamily: 'montserratRegular',
    },
    input: {
        margin: 10,
        padding: 5,
        backgroundColor: 'rgba(255,255,255,0.2)',
        fontFamily: 'montserratRegular',
        color: 'white',
        borderRadius: 3,
    },
    button: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)',
        padding: 15,
        margin: 10,
        borderRadius: 3,
    },
    buttonText: {
        textAlign: 'center',
        color: 'lightgray',
        fontSize: 18,
        fontFamily: 'montserratRegular',
    }
})

export default Login