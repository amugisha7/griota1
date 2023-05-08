import { Button, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import CustomInput from '../../components/CustomInput/CustomInput'
import {Auth} from 'aws-amplify'; 
import { useForm } from 'react-hook-form';
import { DataStore } from '@aws-amplify/datastore';
import { Borrower } from '../../models';
import { Storage } from "@aws-amplify/storage"
import Logo from '../../../assets/images/Griota_logo.png'
import { useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';


const Home = ({navigation}) => {

  const { control, handleSubmit} = useForm({});
  
  const [pic, setPic] = useState(null)
  const [count, setCount] = useState(0)
  
  async function setImage() {
    const image = await launchImageLibrary({mediaType: 'photo'})
    setPic(image.assets[0].uri)
    console.log('image is ', image.assets[0].uri)
    const imageUri = image.assets[0].uri
    const response = await fetch(imageUri);
    const blob = await response.blob();
    await Storage.put('National ID', blob)
    
  }

  useEffect(()=>{
  console.log('state is', pic)
  console.log('count', count)
  },[pic])

  useEffect(()=>{
    setCount(count+1) 
    console.log('COUNT', count)
  },[])

  const logOut = async ()=> {
    await Auth.signOut()
    navigation.navigate('Sign In')
  }

  // const handleChoosePhoto = () => {
  //   const imageLib = async()=>{
  //     const newImage = await launchImageLibrary({mediaType: 'photo'})
  //     return newImage.assets[0].uri;
  //   }
  //   console.log(imageLib)
  // }
    
    
  // const fetchResourceFromURI = async uri => {
  //    const response = await fetch(uri);
  //    console.log(response);
  //    const blob = await response.blob();
  //    return blob;
  // };

  // const uploadResource = async () => {
  //    const img = await fetchResourceFromURI(handleChoosePhoto);
  //    return Storage.put(handleChoosePhoto, img)
  // }

  const onChange =async(e)=>{
    const file = await e.target.files[0]
    await Storage.put(file.name, file)
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
      {/* <CustomInput name='businessType' placeholder='Type of Business' control={control}/>
      <CustomInput name='productType' placeholder='Type of Products' control={control}/>
      <CustomInput name='businessLocation' placeholder='Location of Business' control={control}/>
      <CustomInput name='picOfBusinessArea' placeholder='Picture of Business Area' control={control}/>
      <CustomInput name='picOfOwnerInBusiness' placeholder='Picture of Owner in Business' control={control}/>
      <CustomInput name='picOfOutsideOfBusiness' placeholder='Picture of Outside of Business' control={control}/>
      
      <CustomButton onPress={handleSubmit(updateData)} buttonFunction={'Update Data'}/>
      <CustomButton onPress={logOut} buttonFunction={'Sign Out'} type='SECONDARY'/> */}
      {/* <Text onPress={upLoadFile}>Upload file</Text> */}

    <View style={styles.container}>
      <Text style={styles.text}>Hello!</Text>
      {/* {picURL && (
        <Image source={{uri: picURL}} style={styles.image} />
        
      )} */}
      {count ===1 && <Image source={{uri: pic}} style={{width: '200px', height: '200px'}}/> }
      <Button title="Choose a Profile Picture" onPress={setImage} />
      
    </View>

      <input type='file' onChange={onChange} />
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