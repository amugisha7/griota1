import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Controller } from "react-hook-form";



const CustomInput = ({control, name, placeholder, secureTextEntry, rules, type}) => {

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value}, fieldState: {error}}) => (
          <>
            <TextInput
              placeholder={placeholder}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={[styles.textInput, {borderColor: error ? 'red' : 'gray'}]}
              secureTextEntry={secureTextEntry}
              type={type}
              
            />
            {error && <Text style={styles.errors}>{error.message || 'Error'}</Text>}
          </>
        )}
        name={name}
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
    errors: {
      color: 'red',
      fontSize: '14px'
    },
    textInput: {
        color: 'grey',
        padding: '10px',
        borderColor: 'gray',
        borderWidth: '1px',
        backgroundColor: 'white',
    }
})
