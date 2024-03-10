import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import OtherLoginOption from './components/OtherLoginOption'
import LoginForm from './components/LoginForm';
import Colors from '../../assets/constants/Colors';
import FontFamily from '../../assets/constants/FontFamily';

const fontRegular = FontFamily.fontRegular;
const fontSemiBold = FontFamily.fontSemiBold;
const fontBold = FontFamily.fontBold;
const windowHeight = Dimensions.get('window').height;

export default function Login() {
  function handleLogin(): void {
    console.log("Login Pressed");
  }

  return (
    <View style = {styles.container}>
      <View style = {styles.subContainer}>
        <TouchableOpacity style = {styles.backButton}>
          <Image
            source = {require('../../assets/images/back_arrow.png')}
            style = {styles.backArrow}
          />
        </TouchableOpacity>
        <View>
          <Text style = {styles.welcomeMessage}>
            Welcome back!{"\n"}Glad to see you, Again!
          </Text>
        </View>
      </View>
      <LoginForm/>
      <OtherLoginOption/>
      <View style = {{display: 'flex', flexDirection: 'row', position: 'absolute', bottom: 10}}>
        <Text style = {styles.registerOption}>Don't have an account?</Text>
        <TouchableOpacity><Text style = {[styles.registerOption,{color: 'skyblue'}]}>Register Now</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    height: windowHeight
  },
  subContainer: {
    width: '100%',
    alignSelf:'flex-start',
    padding: '5%',
    marginBottom: 50
  },
  backButton:{
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation:1,
    backgroundColor: Colors.White,
    borderRadius: 12,
    borderColor: Colors.Light_Grey
  },
  backArrow:{
    width: 19,
    height: 19
  },
  welcomeMessage: {
    marginTop: 30,
    fontSize: 30,
    fontFamily: fontBold,
    color: Colors.Theme_Black
  },
  registerOption: {
    fontFamily: fontSemiBold,
    paddingHorizontal: 2,
    color: Colors.Theme_Black
  }
})