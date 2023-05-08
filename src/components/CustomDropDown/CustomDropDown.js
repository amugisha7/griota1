import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { useEffect } from 'react';
import {Picker} from '@react-native-picker/picker';
import { griotaStyles } from '../../../assets/styles/style';


const CustomDropDown = ({items, setSelectedItem, required, mylabel}) => {

  const [option, setOption] = useState()
  const[req, setReq] = useState(0)

  useEffect(()=> {
    setSelectedItem(option);
    if(required){setReq(1)}
  }, [option])

  return (
    <View style={styles.container}>
      {mylabel && <Text style={griotaStyles.label}>{mylabel}</Text>}
      <Picker
        style={styles.picker}
        selectedValue={option}
        onValueChange={(itemValue, itemIndex) =>{
            setOption(itemValue)
          }
        }>
          {items.map(item=>(
            <Picker.Item style={styles.pickerItem} label={item} value={item} />
          ))}
        
      </Picker>
      {(req>0 && (option === 'Select from list' || option ===undefined)) && <Text style={styles.errors}>Please make a selection</Text> }
    </View>
  )
}

export default CustomDropDown

const styles = StyleSheet.create({
  container: {
    margin: '20px'
  },
  errors: {
    color: 'red',
    fontSize: '14px'
  },
  picker: {
    padding: '5px'
  },
  pickerItem: {
    padding: '15px'
  }
})