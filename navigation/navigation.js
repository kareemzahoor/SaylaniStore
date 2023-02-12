import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from '../src/screens/GetStarted';
import SignUp from '../src/screens/SignUp';
import SignIn from '../src/screens/SignIn';
import AdminHome from '../src/screens/AdminHome';
import UserHome from '../src/screens/UserHome';


const Stack = createNativeStackNavigator()


const AppNavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='SignUp' screenOptions={{headerShown:false}}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="AdminHome" component={AdminHome} />
      <Stack.Screen name="UserHome" component={UserHome} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AppNavigation