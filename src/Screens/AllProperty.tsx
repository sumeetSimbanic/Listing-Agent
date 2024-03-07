import React, {useState} from 'react';
import {View, StyleSheet, Text, Image,TouchableOpacity, TouchableHighlight} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {TextInput, List, Avatar} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const AllProperty: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const navigation = useNavigation<any>();

  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row'}}>
        
      <TouchableHighlight onPress={() => navigation.navigate('Menu')}>
          <Image
            style={styles.drawer}
            source={require('../../images/bars.png')}
            resizeMode="cover"
          />
        </TouchableHighlight>
        <Text style={styles.heading}>Properties</Text>
      </View>

      <TextInput
        value={search}
        label="Search..."
        onChangeText={text => setSearch(text)}
        style={styles.input}
      />

      <View style={styles.divider}></View>
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
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

        <View style={styles.divider}></View>
        <View style={{flexDirection: 'row'}}>
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
        <View style={styles.divider}></View>
        <View style={{flexDirection: 'row'}}>
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
        <View style={styles.divider}></View>
        <View style={{flexDirection: 'row'}}>
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
      </ScrollView>
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
  myContainertwo: {
    width: '100%',
    height: 82,
    top: 1,
  },
  drawer: {
    width: 20,
height: 14,
top: 22,
left: 5,
backgroundColor:"white"

 
  },
  input: {
    width: 335,
    height: 48,
    marginLeft: '4%',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 9,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
  },
  heading: {
    marginBottom: 10,
    fontWeight: '700',
    paddingLeft: 15,
    marginTop: 15,
    fontSize: 20,

    color: '#000000',
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
    width: 179,
    height: 115,
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
    width: '100%',
    height: 16,
    marginBottom: '1%',
    alignItems: 'center',
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
    width: 179,
    height: 115,
    top: 275,
    left: 232,
  },
});

export default AllProperty;
