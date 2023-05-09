import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import CustomImageUpload from '../../components/CustomImageUpload/CustomImageUpload'
import { Pressable } from 'react-native'
import { DataStore } from '@aws-amplify/datastore';
import { Storage } from "@aws-amplify/storage"
import CustomInput from '../../components/CustomInput/CustomInput';
import { useForm } from 'react-hook-form';
import CustomButton from '../../components/CustomButton/CustomButton'
import CustomDropDown from '../../components/CustomDropDown/CustomDropDown'
import { businessType } from '../../Lists/BusinessTypes'
import { businessLocations } from '../../Lists/BusinessLocations'

import { griotaStyles } from '../../../assets/styles/style'

const FormScreen1 = (
  {
    navigation, userPhoneNumber, 
    setSelectedBusinessLocation, setSelectedBusinessType, 
    recieveFormData1
  }) => 
{
    const [count, setCount] = useState(0)
        
    // const [nationalID, setNationalID] = useState(null)
    
    const { control, handleSubmit, watch  } = useForm({
      defaultValues: {
        businessActivity: '',
      }
    });
        
    // const uploadS3 = async()=>{
    //     console.log(userPhoneNumber+'nationalID', nationalID)
    //     console.log(userPhoneNumber+'nextOfKinNationalID', nextOfKinID)
    //     await Storage.put(userPhoneNumber+'nationalIDtest', nationalID)
    //     await Storage.put(userPhoneNumber+'nextOfKinNationalIDtest', nextOfKinID)
    // }

  return (
    <View style={styles.container}>
      <View style={griotaStyles.textContainer}>
        <Text style={griotaStyles.title}>Apply for a Working Capital Loan</Text>
        <Text style={griotaStyles.text}>Please fill out this form completely to apply for a working capital loan.</Text>
        <Text style={griotaStyles.text}>Incomplete or misleading information may lead to your loan application being rejected.</Text>
        <Text style={griotaStyles.text}>Your information will be protected as per our privacy policy. </Text>
      </View>
      <View>
        <CustomDropDown 
          items={businessType} 
          setSelectedItem={setSelectedBusinessType} 
          mylabel={'What does your businesss do?'}
          required
        />
        
        <CustomInput 
            name='businessActivity'
            mylabel='Describe the actual products/services that your business sells to make money'
            placeholder={''} 
            control={control}
            rules={{
              required: "This field is required",
            }}
        />

        <CustomDropDown 
          mylabel={'Where is your business located?'}
          items={businessLocations} 
          setSelectedItem={setSelectedBusinessLocation} 
          required
        />

      </View>
      <CustomButton onPress={handleSubmit(recieveFormData1)} buttonFunction={'Next'}/>   
    </View>
  )
}

export default FormScreen1

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