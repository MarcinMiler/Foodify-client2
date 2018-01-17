import React from 'react'
import { View, ScrollView, Text, StyleSheet, TouchableNativeFeedback, Image } from 'react-native'
import { LinearGradient } from 'expo'

import { Icon } from '../App'
import Nav from './Nav'

const TypeFood = ({
    navigation
}) => {
    const handleTouch = category => navigation.navigate('Product', { category })
    return(
        <LinearGradient style={styles.container} colors={['#AA00FF', '#CE31C4']}>

            <Nav navigation={navigation} />

            <ScrollView contentContainerStyle={styles.contentContainer}>
                
                <TouchableNativeFeedback onPress={() => handleTouch('Salads')} delayPressIn={0}>
                    <View style={styles.product}>
                        <Icon name='salad' size={75} color='white'/>
                        <Text style={styles.text}>Salads</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={() => handleTouch('Meat')} delayPressIn={0}>
                    <View style={styles.product}>
                        <Icon name='meat' size={75} color='white'/>
                        <Text style={styles.text}>Dinner</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback delayPressIn={0}>
                    <View style={styles.product}>
                        <Icon name='fish' size={75} color='white'/>
                        <Text style={styles.text}>Fish</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback delayPressIn={0}>
                    <View style={styles.product}>
                        <Icon name='prawn' size={75} color='white'/>
                        <Text style={styles.text}>Sea food</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback delayPressIn={0}>
                    <View style={styles.product}>
                        <Icon name='sushi' size={75} color='white'/>
                        <Text style={styles.text}>Sushi</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={() => handleTouch('Dessert')} delayPressIn={0}>
                    <View style={styles.product}>
                        <Icon name='pancake' size={75} color='white'/>
                        <Text style={styles.text}>Dessert</Text>
                    </View>
                </TouchableNativeFeedback>

            </ScrollView>

        </LinearGradient>
    )
} 

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    contentContainer: {
        paddingTop: 10,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    product: {
        width: '40%',
        height: 170,
        backgroundColor: 'rgba(255,255,255,0.25)',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'rgba(255,255,255,0.35)',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: 30
    },
    text: {
        fontFamily: 'montserratRegular',
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        marginTop: 5
    }
})

export default TypeFood