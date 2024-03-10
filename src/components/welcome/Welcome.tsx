import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../../assets/constants/Colors'
import OtherLoginOption from '../login/components/OtherLoginOption'
import CustomButton from './components/CustomButton'
import FontFamily from '../../assets/constants/FontFamily'

const fontRegular = FontFamily.fontRegular;
const fontSemiBold = FontFamily.fontSemiBold;
const fontBold = FontFamily.fontBold;

export default function Welcome() {
    function handleLogin(): void {
        console.log("Login Pressed");
    }

  return (
    <View style = {styles.container}>
        <View style = {{ marginTop:'15%', flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
            <Text style = {{color: Colors.Theme_Black, fontSize: 40, fontFamily: fontBold}}>
                Interview
            </Text>
            <Text style = {{margin: 5,color: Colors.White, fontSize: 40, fontFamily: fontRegular, backgroundColor: Colors.Theme_Black,paddingLeft:10, paddingRight: 10, borderRadius: 8 }}>
                Hub
            </Text>
        </View>
        <Image 
            source = {require('../../assets/images/welcome.png')}
            style = {styles.imageStyle}
        />
        <View style = {styles.buttonContainer}>
            <CustomButton onPress={handleLogin} text = "Login"/>
            <TouchableOpacity style = {[styles.button, styles.signUpButton]}>
                <Text style = {{color: Colors.Theme_Black, fontFamily: fontSemiBold}}>
                    Register
                </Text>
            </TouchableOpacity> 
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
        padding: '2%',
        alignItems: 'center'
    },
    imageStyle: {
        width: '90%',
        height: '50%',
        resizeMode: 'contain'
    },  
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20
    },
    button: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        margin: 10,
        elevation: 3
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