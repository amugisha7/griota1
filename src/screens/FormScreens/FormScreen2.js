import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomImageUpload from '../../components/CustomImageUpload/CustomImageUpload'
import CustomButton from '../../components/CustomButton/CustomButton'
import { griotaStyles } from '../../../assets/styles/style'

const FormScreen2 = (
  {
    navigation, userPhoneNumber, 
    setBusinessAreaPicBlob, setOutsideOfBusinessPicBlob, 
    setOwnerInBusinessPicBlob, recieveFormData2
  }) => 
{
    // const uploadS3 = async()=>{
    //     console.log(userPhoneNumber+'nationalID', nationalID)
    //     console.log(userPhoneNumber+'nextOfKinNationalID', nextOfKinID)
    //     await Storage.put(userPhoneNumber+'nationalIDtest', nationalID)
    //     await Storage.put(userPhoneNumber+'nextOfKinNationalIDtest', nextOfKinID)
    // }

  return (
    <View style={styles.container}>
      <View style={griotaStyles.textContainer}>
        <Text style={griotaStyles.title}>More Business Details</Text>
        <Text style={griotaStyles.text}>Please fill out this form completely to apply for a working capital loan.</Text>
        <Text style={griotaStyles.text}>Incomplete or misleading information may lead to your loan application being rejected.</Text>
        <Text style={griotaStyles.text}>Your information will be protected as per our privacy policy. </Text>
      </View>
      <View>

        <CustomImageUpload 
            mylabel={'Upload picture of your business area'} 
            setBlobValue={setBusinessAreaPicBlob}/>

        <CustomImageUpload 
            mylabel={'Upload picture of you in your business'} 
            setBlobValue={setOwnerInBusinessPicBlob}/>

        <CustomImageUpload 
            mylabel={'Upload picture of the outside of your business'} 
            setBlobValue={setOutsideOfBusinessPicBlob}/>

      </View>
      <CustomButton onPress={recieveFormData2} buttonFunction={'Next'}/>   
    </View>
  )
}

export default FormScreen2

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