import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, BottomNavigation } from 'react-native-paper';
import Client from '../Screens/Client';
import UpdateProfile from '../Screens/UpdateProfile';
import CalenderDayPage from '../Screens/CalenderMainPage';
import AllProperty from '../Screens/AllProperty';

const BottomBar: React.FC = ({navigation}:any) => {
  const [index, setIndex] = useState(0);

  const routes = [
    { key: 'property', title: 'Property', icon: require('../../images/city-hall.png') }, 
    { key: 'client', title: 'Client', icon: require('../../images/client.png') },
    { key: 'calendar', title: 'Calendar', icon: require('../../images/calendar.png') },
    { key: 'profile', title: 'Profile', icon: require('../../images/user.png') },
  ];

  const renderScene = BottomNavigation.SceneMap({
    property: AllProperty,
    client: Client,
    calendar: CalenderDayPage,
    profile: UpdateProfile,
  });

  const renderIcon = ({ route, focused, color }:any) => {
    return (
      <Image
        source={route.icon}
        style={{
          width: 24,
          height: 24,
          tintColor: focused ? color : 'gray',
        }}
      />
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#EEEEEE" }}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        renderIcon={renderIcon} 
      />
    </View>
  );
};

export default BottomBar;
