import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../views/ProfileScreen/profileScreen';
import SearchScreen from '../views/SearchScreen/searchScreen';

interface NavigationModuleProps{ };

export type RootStackParamList = {
    Search: undefined;
    Profile: { username: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>();


const NavigationModule: React.FC<NavigationModuleProps> = ({}) => {
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName={"Search"} screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name={"Search"} component={SearchScreen}/>
          <Stack.Screen name={"Profile"} component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  
    );
}

export default NavigationModule;