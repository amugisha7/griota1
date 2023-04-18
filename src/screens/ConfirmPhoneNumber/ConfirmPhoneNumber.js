import { View, Text, Image, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../../assets/images/Griota_logo.png';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useForm } from 'react-hook-form';

const ConfirmPhoneNumber = ({navigation}) => {

  const { control, handleSubmit, watch  } = useForm({
    defaultValues: {
      code: '',
    }
  });
  
  const confirmingCode = (data) => {
    console.log(data)
    navigation.navigate('Home')
  }
  const goToRegisterPage = () => {navigation.navigate('Register')}
  const Retry = () => {}

  return (
      <View style={styles.container }>
        <Image source={Logo} style={styles.logo}/>
        <Text style={styles.title}>Enter the code sent to your phone number</Text>
        <CustomInput 
          name='code'
          placeholder={'Code'}
          control={control}
          rules={{}}
        />
        <CustomButton onPress={handleSubmit(confirmingCode)} buttonFunction={'Confirm Phone Number'}/>

        <View style={{marginTop: 20}}>
          <Text>Didn't Receive Message?</Text>
        </View>
        <View style={{width: '50%'}}>
          <CustomButton onPress={Retry} buttonFunction={'Resend Code'} type='SECONDARY'/>
        </View>

        <View style={{width: '50%'}}>
          <CustomButton onPress={goToRegisterPage} buttonFunction={'Change Number'} type='SECONDARY'/>
        </View>
        
      </View>
    
  )
}
export default ConfirmPhoneNumber

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

