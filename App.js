import React, {useState} from 'react';
import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import Register from './src/screens/RegisterScreen/Register';
import ConfirmPhoneNumber from './src/screens/ConfirmPhoneNumber/ConfirmPhoneNumber';
import ForgotPassword from './src/screens/ForgotPassword/ForgotPassword';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home/Home';
import { Amplify } from 'aws-amplify';
import config from './src/aws-exports';
import Tester from './src/screens/Tester/Tester' 
import CustomImageUpload from './src/components/CustomImageUpload/CustomImageUpload';
import { View, Text, Dimensions } from 'react-native';
import FormScreen from './src/screens/FormScreens/FormScreen';
import FormScreen1 from './src/screens/FormScreens/FormScreen1';
import CustomDropDown from './src/components/CustomDropDown/CustomDropDown';

Amplify.configure(config)

const Stack = createNativeStackNavigator();

const screenWidth = Dimensions.get('window').width;
console.log('Screen width:', screenWidth);


const App= () => {
  
  return (
    <View style={{maxWidth: screenWidth}}>
      <FormScreen />
    </View>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Sign In" screenOptions={{headerShown: false}}>
        
    //       <Stack.Screen name='Sign In' component={SignInScreen} />
    //       <Stack.Screen name='Home' component={Home} />
    //       <Stack.Screen name='Register' component={Register} />
    //       <Stack.Screen name='Forgot Password' component={ForgotPassword} />
    //       <Stack.Screen name='Confirm Phone Number' component={ConfirmPhoneNumber} />
    //       <Stack.Screen name='Tester' component={Tester} />
    //       <Stack.Screen name='FormScreen' component={FormScreen} />
         

    //   </Stack.Navigator>
    // </NavigationContainer>
    
  )  
}
export default App; 


