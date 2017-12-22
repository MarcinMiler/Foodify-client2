import React from 'react'
import { ScrollView, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

import { createIconSetFromIcoMoon } from '@expo/vector-icons'
import icoMoonConfig from '../selection.json'
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon')
import { LinearGradient } from 'expo'

const TypeFood = ({
    navigation
}) => {
    const handleTouch = () => navigation.navigate('Products')
    return(
        <ScrollView contentContainerStyle={styles.contentContainer}>
    
            <TouchableWithoutFeedback onPress={ handleTouch }>
                <LinearGradient elevation={15} colors={['#5FFCFF', '#43FF9E']} start={[0.1, 1.0]} end={[1.0, 0.1]} style={[ styles.items, { marginTop: 0 } ]}>
                    <Text style={ styles.text }>Salads</Text>
                    <Icon style={ styles.icon } name='salad' size={72} color='white' />
                </LinearGradient>
            </TouchableWithoutFeedback>
    
            <TouchableWithoutFeedback onPress={ handleTouch }>
                <LinearGradient elevation={15} colors={['#DA53FF', '#7328FF']} start={[0.1, 1.0]} end={[1.0, 0.1]} style={ styles.items }>
                    <Text style={ styles.text }>Dessert</Text>
                    <Icon style={ styles.icon } name='pancake' size={72} color='white' />
                </LinearGradient>
            </TouchableWithoutFeedback>
    
            <TouchableWithoutFeedback onPress={ handleTouch }>
                <LinearGradient elevation={15} colors={['#FF7676', '#FFE175']} start={[0.1, 1.0]} end={[1.0, 0.1]} style={ styles.items }>
                    <Text style={ styles.text }>Meat</Text>
                    <Icon style={ styles.icon } name='meat' size={72} color='white' />
                </LinearGradient>
            </TouchableWithoutFeedback>
            
            <TouchableWithoutFeedback onPress={ handleTouch }>
                <LinearGradient elevation={15} colors={['#643DFF', '#75EDFF']} start={[0.1, 1.0]} end={[1.0, 0.1]} style={ styles.items }>
                    <Text style={ styles.text }>Seafood</Text>
                    <Icon style={ styles.icon } name='octopus' size={72} color='white' />
                </LinearGradient>
            </TouchableWithoutFeedback>
            
        </ScrollView>
    )
} 

const styles = StyleSheet.create({
    contentContainer: {
        padding: 20,
        paddingTop: 40
    },
    items: {
        marginTop: 40,
        width: '100%',
        height: 135,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    text: {
        fontFamily: 'montserratRegular',
        color: 'white',
        fontSize: 42,
        marginLeft: 30,
    },
    icon: {
        marginRight: 30
    },
    touch: {
        backgroundColor: 'transparent'
    }
})

export default TypeFood