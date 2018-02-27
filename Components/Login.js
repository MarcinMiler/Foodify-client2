import React from 'react'
import { LinearGradient } from 'expo'
import { View, Text, StyleSheet, TextInput, TouchableNativeFeedback } from 'react-native'

const Login = ({
    login,
    changeState,
    navigation,
    error
}) => (
    <LinearGradient style={styles.container} colors={['#AA00FF', '#CE31C4']}>

        <View style={styles.item}>
            <Text style={styles.title}>Foodify</Text>
        </View>

        <View style={styles.item}>
            <Text style={styles.login}>Login</Text>

            { error ? <View style={{margin: 10}}>{ error.map((e, i) => <Text style={styles.errorText} key={i}>{e}</Text>)}</View> : <View></View>}
            
            <TextInput
                style={styles.input}
                onChangeText={text => changeState('email', text)}
                placeholder="Email"
                placeholderTextColor="lightgray"
                underlineColorAndroid='transparent'
            />
            
            <TextInput
                style={styles.input}
                onChangeText={text => changeState('password', text)}
                placeholder="Password"
                placeholderTextColor="lightgray"
                underlineColorAndroid='transparent'
            />
            
            <TouchableNativeFeedback onPress={ login }>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Login Now</Text>
                </View>
            </TouchableNativeFeedback>
        </View>

        <View style={styles.item}>
            <TouchableNativeFeedback onPress={() => navigation.navigate('Register')}>
                <View style={[styles.button, { marginTop: 150 }]}>
                    <Text style={styles.buttonText}>Register</Text>
                </View>
            </TouchableNativeFeedback>
        </View>


    </LinearGradient>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
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
        fontFamily: 'montserratRegular',
    },
    errorText: {
        fontSize: 12,
        color: 'white',
        fontFamily: 'montserratRegular'
    },
    input: {
        margin: 10,
        padding: 5,
        backgroundColor: 'rgba(255,255,255,0.3)',
        fontFamily: 'montserratRegular',
        color: 'white',
        borderRadius: 3,
    },
    button: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.35)',
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