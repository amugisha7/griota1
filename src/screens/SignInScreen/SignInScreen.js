import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import Logo from '../../../assets/images/Griota_logo.png'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useForm } from 'react-hook-form';

const SignInScreen = ({navigation}) => {
  
  const { control, handleSubmit} = useForm({
    defaultValues: {
      phoneNumber: '',
      password: ''
    }
  });

  const Registering = () => navigation.navigate('Register')

  const ForgotPasswordPressed = () => {navigation.navigate('Forgot Password')}

  const SigningIn = (data) => {
    console.log(data);
    navigation.navigate('Home')
    
    // navigation.navigate('Home')
    
  }

  const PHONE_REGEX = /^0\d{9}/

  return (
      <View style={styles.container }>
        <Image source={Logo} style={styles.logo} resizeMode='contain'/>
        
        <CustomInput 
          name='phoneNumber' 
          placeholder='Phone Number (0711-111-111)' 
          control={control}
          rules={{
            required: "This field is required", 
            pattern: {
              value: PHONE_REGEX,
              message: 'Invalid Phone Number (use format 0712345678)'
            },
          }}
          type={'tel'}
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
              message: "Too short"
            }
          }}
        />
        <CustomButton onPress={handleSubmit(SigningIn)} buttonFunction={'Sign In'}/>

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

