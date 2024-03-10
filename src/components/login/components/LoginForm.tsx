import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import CustomButton from '../../welcome/components/CustomButton'
import FontFamily from '../../../assets/constants/FontFamily';
import Colors from '../../../assets/constants/Colors';

const fontRegular = FontFamily.fontRegular;
const fontSemiBold = FontFamily.fontSemiBold;
const fontBold = FontFamily.fontBold;
const windowWidth = Dimensions.get('window').width;

export default function LoginForm() {
  function handleLogin(): void {
    console.log('Login Pressed');
    
  }

  return (
    <View style = {styles.container}>
      <TextInput 
        style = {styles.inputBox} 
        placeholder='Enter Your Email' 
        placeholderTextColor={Colors.Dark_Grey}
        inputMode='email' 
        
      />
      <TextInput 
      style = {styles.inputBox} 
      placeholder='Enter Your Password'
      placeholderTextColor={Colors.Dark_Grey} 
      inputMode='text' secureTextEntry={true}
      />
      <Text style = {styles.forgotPasswordText}>Forgot Password?</Text>
      <CustomButton text='Login' onPress={handleLogin} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: windowWidth * 0.9,
  },
  inputBox: {
    width: '100%',
    fontSize: 15,
    marginVertical: 5,
    fontFamily: fontRegular,
    paddingHorizontal: 25,
    borderRadius: 8,
    borderWidth: 1,
    elevation: 1,
    borderColor: Colors.Grey,
    color: Colors.Theme_Black,
    backgroundColor: Colors.Light_Grey
  },
  forgotPasswordText: {
    color: Colors.Dark_Grey,
    fontSize: 12, 
    alignSelf: 'flex-end', 
    fontFamily: fontSemiBold, 
    marginBottom: 30
  }

})