import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableHighlight} from 'react-native';
import {TextInput, List, Avatar} from 'react-native-paper';
import BottomBar from '../Components/BottomBar';

const Clientproperty: React.FC = ({navigation}:any) => {
  const [chatVisible, setChatVisible] = useState<boolean>(false);

  const handlePhotoPress = () => {
    setChatVisible(!chatVisible);
  };
  return (
    <View style={{flex:1}}>
      <View style={styles.myContainer}>
        <Text style={styles.text}>Alpesh Savaliya</Text>
      </View>
      <View style={styles.myContainertwo}>
        <Text style={styles.text}>Client Property</Text>
      </View>

      <View style={styles.divider}></View>

      <View style={{flexDirection:"row"}}>
      <View style={styles.image} >

        <Image
          style={styles.imageStyle}
          source={require('../../images/property.jpg')}
          resizeMode="cover"
        />

      </View>
      <TouchableHighlight onPress={handlePhotoPress}>

      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>
          479 Homestead Dr, North Tonawanda, NY 14120{'\n'}
          bd 3 ba 1, 998 sqft{'\n'}
          $369,900
        </Text>
      </View>
      </TouchableHighlight>

      </View>
      <View style={styles.scheduleContainer}>
        <Text style={styles.scheduleText}>
        Showing Schedule on Fri SEP 1 , 09:00AM
        </Text>
      </View>

    
      <View style={styles.divider}></View>
      <View style={{flexDirection:"row"}}>
      <View style={styles.image}>
        <Image
          style={styles.imageStyle}
          source={require('../../images/property.jpg')}
          resizeMode="cover"
        />
      </View>
     

      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>
          479 Homestead Dr, North Tonawanda, NY 14120{'\n'}
          bd 3 ba 1, 998 sqft{'\n'}
          $369,900
        </Text>
      </View>

      </View>
      <View style={styles.scheduleContainer}>
        <Text style={styles.scheduleText} onPress={()=>navigation.navigate('CalenderDayPage')}>
        Property Rejected by Client
                </Text>
      </View>
      <BottomBar/>
    </View>
  );
};

const styles = StyleSheet.create({
  myContainer: {
    width: '100%',
    height: 82,
    top: 1,
    backgroundColor: '#EFE6E6',
  },
  chatContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  myContainertwo: {
    width: '100%',
    height: 82,
    top: 1,
  },
  heading: {
    marginBottom: 30,
    fontWeight: 'bold',
    paddingLeft: 15,
    fontSize: 24,
    color: 'black',
    fontFamily: 'Inria Serif',
  },
  image: {
    width: 166,
    height: 107,
    margin: '4%',
    borderWidth: 1,
    borderColor: 'gray',
  },
  imageStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  addressContainer: {
    margin: '4%',
    paddingLeft: 8,
    width:179,
    height:115
  },
  addressText: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'left',
    fontFamily: 'Inria Serif',
  },
  scheduleContainer: {
    width:"100%",
    height:16,
    marginBottom:"1%",
    alignItems:"center",


  },
  scheduleText: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0,
    fontFamily: 'Inria Serif',
    textAlign: 'center',
    color: '#1B00BF',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#D7CCCC',
  },
  text: {
    width: 144,
    height: 24,
    fontWeight:"700",
    top: 32,
    left: 143,
  },
  title: {
    fontSize: 20,
    
    fontWeight: 'bold',
    fontFamily: 'Inria Serif',
  },
  paragraph: {
    width: 179,
    height: 115,
    top: 275,
    left: 232,
  },
});

export default Clientproperty;
