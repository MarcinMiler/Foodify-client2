import React from 'react'
import { LinearGradient } from 'expo'
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native'

const Register = ({
    register,
    changeState,
    navigation,
    error
}) => (
    <LinearGradient style={styles.container} colors={['#AA00FF', '#CE31C4']}>

        <View style={styles.item}>
            <Text style={styles.title}>Register</Text>
        </View>

        <View style={styles.item}>
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
            
            <TextInput
                style={styles.input}
                onChangeText={text => changeState('password2', text)}
                placeholder="Confirm password"
                placeholderTextColor="lightgray"
                underlineColorAndroid='transparent'
            />
            
            <TouchableWithoutFeedback onPress={async () => {
                const reg = await register()
                if(reg) navigation.navigate('Login')
            }}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Register now</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>

        <View style={styles.item}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
                <View style={[styles.button, { marginTop: 120 }]}>
                    <Text style={styles.buttonText}>Login</Text>
                </View>
            </TouchableWithoutFeedback>
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
        marginBottom: 100,
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

export default Register