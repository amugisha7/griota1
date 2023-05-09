import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { Pressable } from 'react-native'
import FormScreen1 from './FormScreen1';
import FormScreen2 from './FormScreen2';
import FormScreen3 from './FormScreen3'; 
import { Auth } from 'aws-amplify';
import CustomButton from '../../components/CustomButton/CustomButton';

const FormScreen = ({navigation}) => {
  const [count, setCount] = useState(0)
  const [phoneNumber, setPhoneNumber] = useState('abc')
  const[formPage, setFormPage] = useState(1)
  const[selectedBusinessType, setSelectedBusinessType] = useState()
  const[selectedBusinessLocation, setSelectedBusinessLocation] = useState()
  const[businessAreaPicBlob, setBusinessAreaPicBlob] = useState()
  const[ownerInBusinessPicBlob, setOwnerInBusinessPicBlob] = useState()
  const[outsideOfBusinessPicBlob, setOutsideOfBusinessPicBlob] = useState()
  const[durationInBsuiness, setDurationInBsuiness] = useState()
  
  const uploadS3 = async()=>{
    console.log('ready to upload')
        // console.log(userPhoneNumber+'nationalID',nationalID)
        // console.log(userPhoneNumber+'nextOfKinNationalID', nextOfKinID)
        // await Storage.put(userPhoneNumber+'nationalIDtest', nationalID)
        // await Storage.put(userPhoneNumber+'nextOfKinNationalIDtest', nextOfKinID)
    }


  // useEffect(async()=>{
  //   const user = await Auth.currentAuthenticatedUser();

  //   const { attributes } = user;
  //   setPhoneNumber(attributes.phone_number)
  // }, []); 

  const goBack =()=>setFormPage(formPage - 1)
  const goNext =()=>setFormPage(formPage + 1)

  const recieveFormData1 = (data) =>{
    const {businessActivity} = data
    console.log('non state business', businessActivity)
    setFormPage(formPage + 1)
  }

  const recieveFormData2 = () =>{
    setFormPage(formPage + 1)
  }
  
  const receiveFormData3 = (data) =>{
    const {salesLastWeek, salesBeforeLastWeek} = data
    console.log('sales made last week', salesLastWeek)
    console.log('sales made week before last week', salesBeforeLastWeek)
    showOnConsole()
    setFormPage(formPage + 1)
  }

  const showOnConsole=()=>{
    console.log('Business Type: ', selectedBusinessType)
    console.log('Business Location', selectedBusinessLocation)
    console.log('pic of the business Area', businessAreaPicBlob)
    console.log('pic of Owner in the business', ownerInBusinessPicBlob)
    console.log('pic of Outside of the business', outsideOfBusinessPicBlob)
    console.log('duration in Business', durationInBsuiness)
  }

  return (
    <View style={{paddingVertical: 20, backgroundColor: '#fff8f7'}}>
      <View style={{display: formPage===1 ?'block':'none'}}>
        <FormScreen1 
          userPhoneNumber={phoneNumber} 
          setSelectedBusinessLocation={setSelectedBusinessLocation}
          setSelectedBusinessType={setSelectedBusinessType}
          recieveFormData1={recieveFormData1}
          
          
        />
      </View>
      <View style={{display: formPage===2 ?'block':'none'}}>
        <FormScreen2 
          userPhoneNumber={phoneNumber} 
          setBusinessAreaPicBlob={setBusinessAreaPicBlob}
          setOwnerInBusinessPicBlob={setOwnerInBusinessPicBlob}
          setOutsideOfBusinessPicBlob={setOutsideOfBusinessPicBlob}
          recieveFormData2={recieveFormData2}
        />
      </View>
      
      <View style={{display: formPage===3 ?'block':'none'}}>
        <FormScreen3 
          setDurationInBusiness={setDurationInBsuiness}
          receiveFormData3={receiveFormData3}

        />
      </View>

      <View style={{display: formPage===4 ?'block':'none'}}>
        <CustomButton onPress={uploadS3} buttonFunction={'Submit to AWS'}/>
      </View>

      { formPage > 1 &&
        <View>
          <CustomButton onPress={goBack} buttonFunction={'Back'} type={'SECONDARY'}/>   
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
    
  pressable: {
      margin: 10,
      width: '50%'
  },
  
})

export default FormScreen