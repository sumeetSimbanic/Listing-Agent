import React, {useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const ClientPropertyChat: React.FC = () => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View>
          <View style={styles.image}>
            <Image
              style={styles.imageStyle}
              source={require('../../images/property.jpg')}
              resizeMode="cover"
            />
          </View>
        </View>
        <View style={styles.addressContainer}>
          <Text style={styles.scheduleText}>
            Showing Schedule - {'\n'}
            Thu Sep 21 2023 09:00 AM
          </Text>
          <Text style={styles.addressText}>
            479 Homestead Dr, North Tonawanda, NY 14120{'\n'}
            bd 3 ba 1, 998 sqft{'\n'}
            $369,900
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 186,
    height: 120,

    borderWidth: 1,
    marginTop: 50,
    marginLeft: 20,
    borderColor: 'gray',
  },
  imageStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  addressContainer: {
    width: 179,
    height: 134,
    top: 30,
    marginLeft: 10,
    marginTop: 20,
  },
  addressText: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'left',
    fontFamily: 'Inria Serif',
    marginRight: '1%',
    marginTop:"5%"
  },
  scheduleText: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'left',
    fontFamily: 'Inria Serif',
    marginRight: '1%',
    color:'#1B00BF'
  },

  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#D7CCCC',
  },

  text: {
    width: 200,
    height: 24,
    fontWeight: '700',
    top: 32,
    left: 143,
  },
  title: {
    fontSize: 20,

    fontWeight: 'bold',
    fontFamily: 'Inria Serif',
  },
  paragraph: {
    width: 250,
    height: 115,
    top: 275,
    left: 232,
  },
});

export default ClientPropertyChat;
