import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import Register from './src/screens/RegisterScreen/Register';
import ConfirmPhoneNumber from './src/screens/ConfirmPhoneNumber/ConfirmPhoneNumber';
import ForgotPassword from './src/screens/ForgotPassword/ForgotPassword';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sign In" screenOptions={{headerShown: false}}>
        
          <Stack.Screen name='Sign In' component={SignInScreen} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='Forgot Password' component={ForgotPassword} />
          <Stack.Screen name='Confirm Phone Number' component={ConfirmPhoneNumber} />
       
         
        
        

      </Stack.Navigator>
    </NavigationContainer>
    
  )  
}


