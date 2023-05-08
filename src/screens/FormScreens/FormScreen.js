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
  const[firstimage, setFirstImage] = useState()

  // useEffect(async()=>{
  //   const user = await Auth.currentAuthenticatedUser();

  //   const { attributes } = user;
  //   setPhoneNumber(attributes.phone_number)
  // }, []); 

  const goBack =()=>setFormPage(formPage - 1)
  const goNext =()=>setFormPage(formPage + 1)

  const showOnConsole=()=>{
    console.log('Business Type: ', selectedBusinessType)
    console.log('Business Location', selectedBusinessLocation)
    console.log('the first image', firstimage)
  }
  
  const recieveForm1Data = (data) =>{
      const {businessActivity} = data
      console.log('non state business', businessActivity)
      showOnConsole()
      setFormPage(formPage + 1)
  }
    
  return (
    <View style={{paddingVertical: 20, backgroundColor: '#fff8f7'}}>
      <View style={{display: formPage===1 ?'block':'none'}}>
        <FormScreen1 
          userPhoneNumber={phoneNumber} 
          setSelectedBusinessLocation={setSelectedBusinessLocation}
          setSelectedBusinessType={setSelectedBusinessType}
          setBlobValue={setFirstImage}
          recieveFormData={recieveForm1Data}
          
          
        />
      </View>
      <View style={{display: formPage===2 ?'block':'none'}}>
        <FormScreen2 />
      </View>
      <View style={{display: formPage===3 ?'block':'none'}}>
        <FormScreen3 />
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