import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Controller } from "react-hook-form";
import { griotaStyles } from '../../../assets/styles/style';

const CustomInput = ({control, name, placeholder, secureTextEntry, rules, type, mylabel}) => {

  return (
    <View style={styles.container}>
      {mylabel && <Text style={griotaStyles.label}>{mylabel}</Text>}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value}, fieldState: {error}}) => (
          <>
            <View style={{width: '100%'}}>
              <TextInput
                placeholder={placeholder}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={[styles.textInput, {borderColor: error ? 'red' : 'gray'}]}
                secureTextEntry={secureTextEntry}
                type={type}
                multiline={true}
              />

            </View>
            {error && <Text style={griotaStyles.errors}>{error.message || 'Error'}</Text>}
          </>
        )}
      />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    
    container: {
        paddingHorizontal: 20,
        marginVertical: 10,
        width: '100%'
    },
    label: {

    },
    textInput: {
        color: 'grey',
        padding: '10px',
        borderColor: 'gray',
        borderWidth: '1px',
        backgroundColor: 'white',
        minHeight: 30,
        justifyContent: 'flex-start',
        
    }
})
