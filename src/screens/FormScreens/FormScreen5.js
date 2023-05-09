import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomImageUpload from '../../components/CustomImageUpload/CustomImageUpload'
import CustomInput from '../../components/CustomInput/CustomInput';
import { useForm } from 'react-hook-form';
import CustomButton from '../../components/CustomButton/CustomButton'
import CustomDropDown from '../../components/CustomDropDown/CustomDropDown'

import { griotaStyles } from '../../../assets/styles/style'

const FormScreen4 = (
  {
    receiveFormData5
  }) => 
{
    const { control, handleSubmit, watch  } = useForm({
      defaultValues: {
        businessActivity: '',
      }
    });
        
  return (
    <View style={styles.container}>
      <View style={griotaStyles.textContainer}>
        <Text style={griotaStyles.title}>Next of Kin</Text>
      </View>  
      <View>
                
        <CustomInput 
            name='nextOfKinName'
            mylabel='What is the full name of your next of kin?'
            placeholder={''} 
            control={control}
            rules={{
              required: "This field is required",
            }}
        />
        
        <CustomInput 
            name='nextOfKinRelationship'
            mylabel='What is your relationship with the next of kin?'
            placeholder={''} 
            control={control}
            rules={{
              required: "This field is required",
            }}
        />

        <CustomInput 
            name='nextOfKinPhoneNumber'
            mylabel='What is the phone number of the next of kin?'
            placeholder={''} 
            control={control}
            rules={{
              required: "This field is required",
            }}
        />

      </View>
      <CustomButton onPress={handleSubmit(receiveFormData5)} buttonFunction={'Next'}/>   
    </View>
  )
}

export default FormScreen4

const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
      fontSize: '24px',
      fontWeight: 600,
      textAlign: 'center'
  },
  link: {
    color: 'blue',
  }
  
})