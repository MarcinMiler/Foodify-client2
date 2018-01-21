import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableNativeFeedback, TextInput } from 'react-native'
import { LinearGradient } from 'expo'

import Nav from './Nav'

const ConfirmOrder2 = ({
    navigation,
    changeState,
    newOrder
}) => (
    <LinearGradient style={styles.container} colors={['#AA00FF', '#CE31C4']}>

        <Nav navigation={navigation} backIcon={true} title='ConfirmOrder' />

        <View style={styles.container2}>

            <View>

                <Text style={styles.title}>Your adress:</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={text => changeState('place', text)}
                    placeholder="Place"
                    placeholderTextColor="lightgray"
                    underlineColorAndroid='transparent'
                />

                <TextInput
                    style={styles.input}
                    onChangeText={text => changeState('postalCode', text)}
                    placeholder="Postal code"
                    placeholderTextColor="lightgray"
                    underlineColorAndroid='transparent'
                />

                <TextInput
                    style={styles.input}
                    onChangeText={text => changeState('phoneNumber', text)}
                    placeholder="Phone Number"
                    placeholderTextColor="lightgray"
                    underlineColorAndroid='transparent'
                />
            </View>

            <View style={styles.wrap}>
                <TouchableNativeFeedback onPress={newOrder}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Next step</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>

        </View>
    </LinearGradient>
)

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    container2:{
        flex: 1,
        padding: 20,
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'montserratRegular',
        color: '#fff',
        fontSize: 20,
    },
    input: {
        margin: 10,
        padding: 5,
        backgroundColor: 'rgba(255,255,255,0.35)',
        fontFamily: 'montserratRegular',
        color: 'white',
        borderRadius: 3,
    },
    wrap: {
        justifyContent: 'center'
    },
    button: {
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.35)',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.35)',
        borderRadius: 3
    },
    buttonText: {
        fontFamily: 'montserratRegular',
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default ConfirmOrder2