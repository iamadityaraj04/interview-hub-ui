import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../assets/constants/colors'

export default function Welcome() {
    
  return (
    <View style = {styles.container}>
        <View style = {{marginBottom: '100%', flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
            <Text style = {{color: Colors.Theme_Black, fontSize: 40, fontFamily: 'Poppins-Bold'}}>
                Interview
            </Text>
            <Text style = {{margin: 5,color: Colors.White, fontSize: 40, fontFamily: 'Poppins-Regular', backgroundColor: Colors.Theme_Black,paddingLeft:10, paddingRight: 10, borderRadius: 8 }}>
                Hub
            </Text>
        </View>
        <View style = {styles.buttonContainer}>
            <View style = {[styles.button, styles.loginButton ]}>
                <Text style = {{color: Colors.White, fontFamily: 'Poppins-Regular'}}>
                    Sign In
                </Text>
            </View>
            <View style = {[styles.button, styles.signUpButton]}>
                <Text style = {{color: Colors.Theme_Black, fontFamily: 'Poppins-Regular'}}>
                    Sign Up
                </Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: Colors.White
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom:'20%'
    },
    button: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        margin: 10,
    },
    loginButton: {
        backgroundColor: Colors.Theme_Black,
    },
    signUpButton: {
        backgroundColor: Colors.White,
        borderColor: Colors.Theme_Black,
        borderWidth: 1.5
    }

})