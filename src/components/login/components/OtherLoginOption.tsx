import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../../../assets/constants/Colors'
import FontFamily from '../../../assets/constants/FontFamily';

const fontSemiBold = FontFamily.fontSemiBold;
export default function OtherLoginOption() {
  return (
    <View style ={styles.continer}>
      <View style = {styles.otherOptionHeader}>
        <View style = {styles.headerLine}></View>
        <Text style = {styles.header}>Or Login with</Text>
        <View style = {styles.headerLine}></View>
      </View>
      <View style = {styles.iconContiner}>
        <TouchableOpacity style = {styles.icon}>
            <Image 
                source = {require('../../../assets/images/facebook_ic.png')}
                style = {styles.iconStyle}
            />
        </TouchableOpacity>
        <TouchableOpacity style = {styles.icon}>
            <Image 
                source = {require('../../../assets/images/google_ic.png')}
                style = {styles.iconStyle}
            />
        </TouchableOpacity>
        <TouchableOpacity style = {styles.icon}>
            <Image 
                source = {require('../../../assets/images/apple_ic.png')}
                style = {styles.iconStyle}
            />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    continer:{
        padding: '2%',
        alignItems: 'center', 
        marginVertical: 5
    },
    otherOptionHeader: {
        display: 'flex',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerLine: {
        width: '33%',
        height: 0,
        borderWidth: 1,
        backgroundColor: Colors.Light_Grey,
        borderColor: Colors.Light_Grey
    },
    header:{
        color: Colors.Dark_Grey,
        fontFamily: fontSemiBold
    },
    iconContiner:{
        marginTop: 20,
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    icon: {
        borderWidth: 1,
        width: '32%',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        elevation: 2,
        backgroundColor: Colors.White,
        borderColor: Colors.Grey
    },
    iconStyle:{
        width: 26,
        height: 26,
        resizeMode: 'contain'
    }
})