import { View, Text, Image, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../../assets/images/Griota_logo.png';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useForm } from 'react-hook-form';
import {Auth} from 'aws-amplify'; 


const Register = ({navigation}) => {

  const { control, handleSubmit, watch  } = useForm({
    defaultValues: {
      username: '',
      password: '',
      passwordCheck: '',
    }
  });

  const PHONE_REGEX = /^0\d{9}/

  const pwd = watch('password'); 

  const goToPrivacyPolicy =()=>{
    Alert.alert(
      'Privacy',
      'Please visit our website www.griota.com to read our privacy policy'
    )
  }

  const goToTermsOfUse =()=>{
    Alert.alert(
      'Terms of Use',
      'Please visit our website www.griota.com to read our privacy policy'
    )
  }

  const goToSignIn = () => {navigation.navigate('Sign In')}

  const registerUser = async (data) => {
    const {username, password} = data;
    try{
      await Auth.signUp(username, password)
      navigation.navigate('Confirm Phone Number', {username})
    } 
    catch(e){
      console.log(e.message);
    }
  }

  return (
      <View style={styles.container }>
        <Image source={Logo} style={styles.logo}/>
        <Text style={styles.title}>Create an Account</Text>
        <CustomInput 
          name='username' 
          placeholder='Phone Number (0711-111-111)' 
          control={control}
          // rules={{
          //   required: "This field is required", 
          //   pattern: {
          //     value: PHONE_REGEX,
          //     message: 'Invalid Phone Number (use format 0712345678)'
          //   },
          // }}
          // type={'tel'}
        />
        
        <CustomInput 
          name='password'
          placeholder={'Password'} 
          control={control}
          secureTextEntry={true}
          rules={{
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Too short",
            } 
          }}
        />

        <CustomInput 
          name='passwordCheck'
          placeholder={'Confirm Password'} 
          control={control}
          secureTextEntry={true}
          rules={{
            required: "This field is required",
            validate: value => pwd===value || 'Passwords do not match',
          }}
        />

        <CustomButton onPress={handleSubmit(registerUser)} buttonFunction={'Register'}/>
        <Text style={{fontSize: '12px'}}>By registering you accept the{' '} 
          <Text style={styles.link} onPress={goToTermsOfUse}>Terms of Use{' '}</Text>and {' '}
          <Text style={styles.link} onPress={goToPrivacyPolicy}>Privacy Policy</Text>
        </Text>
        <View style={{marginTop: 20}}>
          <Text>Already have an account?</Text>
        </View>
        <View style={{width: '50%'}}>
          <CustomButton onPress={goToSignIn} buttonFunction={'Sign In'} type='SECONDARY'/>
        </View>
        
      </View>
    
  )
}
export default Register

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

