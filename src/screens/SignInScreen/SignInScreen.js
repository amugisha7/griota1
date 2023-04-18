import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../../assets/images/Griota_logo.png'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useForm } from 'react-hook-form';
import Tester from '../Tester/Tester';


const SignInScreen = ({navigation}) => {
  
  const [page, setPage] = useState(0)

  const { control, handleSubmit, formState: { errors }  } = useForm({
    defaultValues: {
      phoneNumber: '',
      password: ''
    }
  });

  const Registering = () => navigation.navigate('Register')

  const goToTester = () => {
    navigation.navigate('Tester')
  }

  const ForgotPasswordPressed = () => {navigation.navigate('Forgot Password')}

  const SigningIn = (data) => {
    console.log(data);
    navigation.navigate('Home')
    
    // navigation.navigate('Home')
    
  }

  const PHONE_REGEX = /^0\d{9}/

  const nextPage = ()=> setPage(page+1); 
  const prevPage = ()=> setPage(page-1)
  
  return (
      <View style={styles.container }>
        <Image source={Logo} style={styles.logo} resizeMode='contain'/>
        
        <Tester 
          page={page}
          nextPage={nextPage}
          prevPage={prevPage}
        />

        <CustomInput 
          name='phoneNumber' 
          placeholder='Phone Number (0711-111-111)' 
          control={control}
          rules={{
            required: "This field is required", 
            pattern: {
              value: PHONE_REGEX,
              message: 'Invalid Phone Number'
            },
          }}
          type={'tel'}
        />
        
        <CustomInput 
          name='password'
          placeholder={'Password'} 
          control={control}
          secureTextEntry={true}
          rules={{required: "This field is required"}}
        />
        <CustomButton onPress={handleSubmit(SigningIn)} buttonFunction={'Sign In'}/>

        <Text style={[styles.link, {marginTop: '20px', marginBottom: '20px'}]} onPress={ForgotPasswordPressed}>Forgot Password</Text>
        <View style={{marginTop: 20}}>
          <Text>Don't yet have an account?</Text>
        </View>
        <View style={{width: '50%'}}>
          <CustomButton onPress={Registering} buttonFunction={'Register'} type='SECONDARY'/>
        </View>
        <Text onPress={goToTester}>Tester</Text>
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

