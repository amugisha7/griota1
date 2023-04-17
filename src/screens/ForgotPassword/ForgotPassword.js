import { View, Text, Image, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../../assets/images/Griota_logo.png';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';


const ForgotPassword = ({navigation}) => {

  const [phoneNumber, setPhoneNumber] = useState('');
  
  const CodeRequested = () => {}

  const Cancel = ()=>{navigation.navigate('Sign In')}

  return (
      <View style={styles.container }>
        <Image source={Logo} style={styles.logo}/>
        <Text style={styles.title}>Get a Code to reset your Password</Text>
        <CustomInput placeholder={'Phone Number'} value={phoneNumber} setValue={setPhoneNumber}/>
        <CustomButton onPress={CodeRequested} buttonFunction={'Submit'}/>
        
        <View style={{width: '50%'}}>
          <CustomButton onPress={Cancel} buttonFunction={'Cancel'} type='SECONDARY'/>
        </View>
        
      </View>
    
  )
}
export default ForgotPassword

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'black',
      borderWidth: '2px',
      width: '100%',
      paddingLeft: 20,
      paddingRight: 20,
      width: '100%',
      // maxWidth: '600px',
    },
    logo: {
      width: 100,
      height: 100
    },
    title: {
        fontSize: '24px',
        fontWeight: 600,
    },
    link: {
      color: 'blue',
    }
    
})

