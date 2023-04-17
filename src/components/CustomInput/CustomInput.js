import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput 
        placeholder={placeholder} 
        value={value}
        onChangeText={setValue}
        style={styles.textInput}
        secureTextEntry={secureTextEntry}

      />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    
    container: {
        
        marginVertical: 10,
        width: '100%'
    },
    textInput: {
        color: 'grey',
        padding: '10px',
        borderColor: 'orange',
        borderWidth: '1px',
        backgroundColor: 'white',
    }
})
