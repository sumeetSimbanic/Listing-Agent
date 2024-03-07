import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TextInput, ScrollView, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PropertyItem: React.FC<{ imageSource: any, address: string, details: string }> = ({ imageSource, address, details }) => (
  <View style={propertyStyles.container}>
    <View style={propertyStyles.imageContainer}>
      <Image
        style={propertyStyles.imageStyle}
        source={imageSource}
        resizeMode="cover"
      />
    </View>

    <View style={propertyStyles.addressContainer}>
      <Text style={propertyStyles.addressText}>
        {address}{'\n'}
        {details}
      </Text>
    </View>
  </View>
);

const AllProperty: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const navigation = useNavigation<any>();

  const propertyData = [
    
      
        {
          imageSource: require('../../images/property.jpg'),
          "address": "479 Homestead Dr, North Tonawanda, NY 14120",
          "details": "bd 3 ba 1, 998 sqft\n$369,900"
        },
        {
          
          imageSource: require('../../images/property.jpg'),
          "address": "479 Homestead Dr, North Tonawanda, NY 14120",
          "details": "bd 3 ba 1, 998 sqft\n$369,900"
        },
        {
          imageSource: require('../../images/property.jpg'),
          "address": "479 Homestead Drrr, North Tonawanda, NY 14120",
          "details": "bd 3 ba 1, 998 sqft\n$369,900"
        },
        {
          imageSource: require('../../images/property.jpg'),
          "address": "479 Homestead Dr, North Tonawanda, NY 14120",
          "details": "bd 3 ba 1, 998 sqft\n$369,900"
        },
        {
          imageSource: require('../../images/property.jpg'),
          "address": "479 Homestead Dr, North Tonawanda, NY 14120",
          "details": "bd 3 ba 1, 998 sqft\n$369,900"
        },
        {
          imageSource: require('../../images/property.jpg'),
          "address": "479 Homestead Dr, North Tonawanda, NY 14120",
          "details": "bd 3 ba 1, 998 sqft\n$369,900"
        }
      ]
    
    
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableHighlight onPress={() => navigation.navigate('Menu')}>
          <Image
            style={styles.drawer}
            source={require('../../images/bars.png')}
            resizeMode="cover"
          />
        </TouchableHighlight>
        <Text style={styles.heading}>Properties</Text>
      </View>

      <View style={styles.searchContainer}>
        <Image
          source={require('../../images/search.png')}
          style={styles.imageSearch}
        />
        <TextInput
          value={search}
          placeholder='Search...'
          onChangeText={text => setSearch(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.divider}></View>

      <ScrollView>
        {propertyData.map((property, index) => (
          <React.Fragment key={index}>
            <PropertyItem {...property} />
            <View style={styles.divider}></View>
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawer: {
    width: 20,
    
    height: 14,
    top: 10,
    left: 5,
    backgroundColor: "white",
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    paddingLeft: 15,
    marginTop: 15,
    color: 'gray',
    fontFamily: 'Inria Serif',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '4%',
  },
  imageSearch: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 30,
    zIndex: 1,
    top: 25,
  },
  input: {
    flex: 1,
    width: '100%',
    height: 48,
    marginLeft: '4%',
    backgroundColor: 'white',
    color: 'black',
    paddingLeft: "15%",
    borderRadius: 9,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    marginRight:25,

  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginVertical: 10,
  },
});

const propertyStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  imageContainer: {
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
});

export default AllProperty;
