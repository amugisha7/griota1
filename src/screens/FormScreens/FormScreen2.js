import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react'
import CustomImageUpload from '../../components/CustomImageUpload/CustomImageUpload'
import { Pressable } from 'react-native'

const FormScreen2 = () => {

    const [nationalID, setNationalID] = useState(null)
    const [nextOfKinID, setNextOfKinID] = useState(null)

    const NationalID = (blob)=>  {
        setNationalID(blob);
    }
    
    const NextOfKinID = (blob)=>  {
        setNextOfKinID(blob);
    }
    
    const uploadS3 = ()=>{
        console.log('the national ID is', nationalID)
        console.log('the national ID is', nextOfKinID)
        // await Storage.put(imagePromptText, blob)

    }

  return (
    <View>
      <CustomImageUpload imagePromptText='Form Screen 2' blobValue={NationalID}/>
      <CustomImageUpload imagePromptText='Next of Kin Id' blobValue={NextOfKinID}/>
      <Pressable onPress={uploadS3}>
        <Text>Send blobs to the console</Text>
      </Pressable>
    </View>
  )
}

export default FormScreen2