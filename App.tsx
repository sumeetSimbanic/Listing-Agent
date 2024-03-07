import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Client from './src/Screens/Client';
import Signin from './src/Screens/Signin';
import Signup from './src/Screens/Signup';
import Clientproperty from './src/Screens/Clientproperty';
import Menu from './src/Screens/Menu';
import UpdateProfile from './src/Screens/UpdateProfile';
import InviteBuyer from './src/Screens/InviteBuyer';
import CalenderMainPage from './src/Screens/CalenderMainPage';
import ClientPropertyChat from './src/Screens/ClientPropertyChat';
import AllProperty from './src/Screens/AllProperty';
import CalenderDayPage from './src/Screens/CalenderDayPage';
import Drawer from './src/Components/Drawers';
import BottomBar from './src/Components/BottomBar';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer theme={{ colors: { background: 'white' } }}>
      <Stack.Navigator initialRouteName="UpdateProfile">
      <Stack.Screen
          name="AllProperty"
          component={AllProperty}
          options={{ headerShown: false }}
        />
      
      <Stack.Screen
          name="ClientPropertyChat"
          component={ClientPropertyChat}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Drawer"
          component={Drawer}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="BottomBar"
          component={BottomBar}
          options={{ headerShown: false }}
        />
      <Stack.Screen
          name="InviteBuyer"
          component={InviteBuyer}
          options={{ headerShown: false }}
        />
      <Stack.Screen
          name="UpdateProfile"
          component={UpdateProfile}
          options={{ headerShown: false }}
        />
      <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false }}
        />
      <Stack.Screen
          name="Clientproperty"
          component={Clientproperty}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="CalenderDayPage"
          component={CalenderDayPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Client"
          component={Client}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
