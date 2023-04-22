import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import CustomInput from '../../components/CustomInput/CustomInput'
import {Auth} from 'aws-amplify'; 
import { useForm } from 'react-hook-form';
import { DataStore } from '@aws-amplify/datastore';
import { Borrower } from '../../models';

const Home = ({navigation}) => {

  const { control, handleSubmit} = useForm({});

  const logOut = async ()=> {
    await Auth.signOut()
    navigation.navigate('Sign In')
  }

  const updateData = async (data)=> {
    const {businessType, productType, businessLocation, 
          picOfBusinessArea, picOfOwnerInBusiness, picOfOutsideOfBusiness} = data;
    try {
      await DataStore.save(
        new Borrower({
        "typeOfBusiness": businessType,
        "typeOfProduct": productType,
        "locationOfBusiness": businessLocation,
        "picOfBusinessArea": picOfBusinessArea,
        "picOfOwnerInBusiness": picOfOwnerInBusiness,
        "picOfOutsideOfBusiness": picOfOutsideOfBusiness
        })
      );
      console.log("Thank You Jesus!")
    }
    catch (err){
      console.log('Failed', err)
    }
  
  }

  return (
    <View style={styles.container}>
      <CustomInput name='businessType' placeholder='Type of Business' control={control}/>
      <CustomInput name='productType' placeholder='Type of Products' control={control}/>
      <CustomInput name='businessLocation' placeholder='Location of Business' control={control}/>
      <CustomInput name='picOfBusinessArea' placeholder='Picture of Business Area' control={control}/>
      <CustomInput name='picOfOwnerInBusiness' placeholder='Picture of Owner in Business' control={control}/>
      <CustomInput name='picOfOutsideOfBusiness' placeholder='Picture of Outside of Business' control={control}/>
      
      <CustomButton onPress={handleSubmit(updateData)} buttonFunction={'Update Data'}/>
      <CustomButton onPress={logOut} buttonFunction={'Sign Out'} type='SECONDARY'/>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: '20px',


    }
})