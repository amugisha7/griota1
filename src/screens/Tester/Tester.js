import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker'
import { useEffect } from 'react'


const Tester = () => {
  const [pic, setPic] = useState(null)
  const [count, setCount] = useState(0)
  
  let rendr = false; 

  async function setImage() {
    const image = await launchImageLibrary({mediaType: 'photo'})
    setPic(image.assets[0].uri)
    console.log('image is ', image.assets[0].uri)
  }
  useEffect(()=>{
  console.log('state is', pic)
  console.log('count', count)
  },[pic])

  useEffect(()=>{
    setCount(count+1) 
    console.log('COUNT', count)
  },[])


  return (
    <View>
      <Text onPress={setImage}>Tester</Text>
      {pic && <Text>Pic is now defined</Text>}
      {count ===1 && <Image source={{uri: pic}} style={{width: '200px', height: '200px'}}/> }
    </View>
  )
}

export default Tester