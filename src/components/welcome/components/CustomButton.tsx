import { Dimensions, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import React from 'react'
import Colors from '../../../assets/constants/Colors'
import FontFamily from '../../../assets/constants/FontFamily';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const fontRegular = FontFamily.fontRegular;
const fontSemiBold = FontFamily.fontSemiBold;
const fontBold = FontFamily.fontBold;

interface ButtonProps extends TouchableOpacityProps {
    onPress: () => void;
    text: string;
}
const CustomButton: React.FC<ButtonProps> = ({ onPress, text}) => {
  return (
    <TouchableOpacity style = {[styles.button, {width: windowWidth * 0.9}]} onPress={onPress}>
      <Text style = {{color: Colors.White, fontFamily: fontSemiBold}}>
        {text}
      </Text>
    </TouchableOpacity> 
  )
}

const styles = StyleSheet.create({
    button: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        margin: 10,
        elevation: 3,
        backgroundColor: Colors.Theme_Black
    }
})

export default CustomButton;