import React, {useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {TextInput, List, Avatar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native'; 

const Menu: React.FC = () => {
  const navigation = useNavigation<any>(); 

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View style={{paddingTop: '5%', paddingRight: '2%'}}>
          <Avatar.Text size={24} label="I" />
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.name}>Alpesh Savaliya</Text>
          <Text style={styles.email}>asavaliya@gmail.com</Text>
        </View>
      </View>
      <View style={{paddingLeft: '7%'}}>
        <List.Section>
          <List.Item
            titleStyle={styles.title}
            title="My information  & Settings"
            left={() => <Avatar.Text size={24} label="M" />}
            onPress={() => navigation.navigate('UpdateProfile')}
          />
          <List.Item
            titleStyle={styles.title}
            title="Invite Buyers"
            left={() => <Avatar.Text size={24} label="I" />}
            onPress={() => navigation.navigate('InviteBuyer')}
          />
          <List.Item
            titleStyle={styles.title}
            title="Help & Support"
            left={() => <Avatar.Text size={24} label="H" />}
          />
          <List.Item
            titleStyle={styles.title}
            title="Logout"
            left={() => <Avatar.Text size={24} label="L" />}
            onPress={() => navigation.navigate('Signin')}

          />
        </List.Section>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  headingContainer: {
    width: 288,
    height: 60,
  },
  heading: {
    marginBottom: 30,
    fontWeight: 'bold',
    paddingLeft: 15,
    fontSize: 24,
    color: 'black',
    fontFamily: 'Inria Serif',
  },

  title: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Inria Serif',
  },
  name: {
    fontSize: 22,

    fontWeight: '700',
    fontFamily: 'Inria Serif',
  },
  email: {
    fontSize: 22,

    fontWeight: '700',
    fontFamily: 'Inria Serif',
    color: '#1B00BF',
  },
});

export default Menu;
