import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
const Stack = createNativeStackNavigator();
const AuthNavigation = () => {

  return (
      <Stack.Navigator
      screenOptions={{
        headerShown:false, }}>      
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
  );
};
export default AuthNavigation;
