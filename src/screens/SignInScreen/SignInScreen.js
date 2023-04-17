import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../../assets/images/Griota_logo.png'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';


const SignInScreen = ({navigation}) => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const Registering = () => navigation.navigate('Register')

  const SigningIn = () => {
    navigation.navigate('Home')

  }

  const ForgotPasswordPressed = () => {navigation.navigate('Forgot Password')}

  return (
      <View style={styles.container }>
        <Image source={Logo} style={styles.logo} resizeMode='contain'/>
        <CustomInput placeholder={'Phone Number'} value={phoneNumber} setValue={setPhoneNumber}/>
        <CustomInput placeholder={'Password'} value={password} setValue={setPassword} secureTextEntry={true}/>
        <CustomButton onPress={SigningIn} buttonFunction={'Sign In'}/>
        <Text style={[styles.link, {marginTop: '20px', marginBottom: '20px'}]} onPress={ForgotPasswordPressed}>Forgot Password</Text>
        <View style={{marginTop: 20}}>
          <Text>Don't yet have an account?</Text>
        </View>
        <View style={{width: '50%'}}>
          <CustomButton onPress={Registering} buttonFunction={'Register'} type='SECONDARY'/>
        </View>
      </View>
    
  )
}
export default SignInScreen

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
        height: 100,
    },
    link: {
      color: 'blue',
    }
    
})

