import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'

const Home = ({navigation}) => {

  const goToSignIn = ()=> navigation.navigate('Sign In')
  const goToRegister = ()=> navigation.navigate('Register')

  return (
    <View style={styles.container}>
      <CustomButton onPress={goToSignIn} buttonFunction={'Go to Sign In'}/>
      <CustomButton onPress={goToRegister} buttonFunction={'Go to Register'}/>
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