import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const CalenderMainPage: React.FC = () => {
  return (
    <View>
      <View style={styles.myContainertwo}>
        <View style={{flexDirection:"row"}}>
      <Text style={styles.select}>Select</Text>

      <Text style={styles.heading}>Calendar</Text>
      </View>
      </View>

      <View style={styles.divider}></View>
      <View style={{flexDirection: 'row'}}>
        <View>
          <View style={styles.addressContainer}>
            <Text style={styles.dateText}>1 feb</Text>
          </View>
          <View style={styles.image}>
            <Image
              style={styles.imageStyle}
              source={require('../../images/property.jpg')}
              resizeMode="cover"
            />
          </View>
        </View>
<View style={{flexDirection:"row"}}>
        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>
            479 Homestead Dr, North Tonawanda, NY 14120{'\n'}
            bd 3 ba 1, 998 sqft{'\n'}
            $369,900
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.timeText}>9:00 AM - 9:00PM</Text>
            <Text style={styles.statusText}>approved by client</Text>
          </View>
          <View style={styles.dividerTwo}></View>
          <Text style={styles.addressText}>
            479 Homestead Dr, North Tonawanda, NY 14120{'\n'}
            bd 3 ba 1, 998 sqft{'\n'}
            $369,900
          </Text>
          <View style={{flexDirection: 'row' ,marginBottom:"10%"}}>
            <Text style={styles.timeText}>9:00 AM - 9:00PM</Text>
            <Text style={styles.statusText}>pending for client</Text>
          </View>

        </View>
        
        </View>      
      </View>
      

      <View style={styles.dividerThree}></View>
      <View style={{flexDirection: 'row'}}>
        <View>
          <View style={styles.addressContainer}>
            <Text style={styles.dateText}>4 feb</Text>
          </View>
          <View style={styles.image}>
            <Image
              style={styles.imageStyle}
              source={require('../../images/property.jpg')}
              resizeMode="cover"
            />
          </View>
        </View>
<View style={{flexDirection:"row"}}>
        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>
            479 Homestead Dr, North Tonawanda, NY 14120{'\n'}
            bd 3 ba 1, 998 sqft{'\n'}
            $369,900
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.timeText}>9:00 AM - 9:00PM</Text>
            <Text style={styles.statusText}>approved by client</Text>
          </View>
          <View style={styles.dividerTwo}></View>
          <Text style={styles.addressText}>
            479 Homestead Dr, North Tonawanda, NY 14120{'\n'}
            bd 3 ba 1, 998 sqft{'\n'}
            $369,900
          </Text>
          <View style={{flexDirection: 'row' ,marginBottom:"10%"}}>
            <Text style={styles.timeText}>9:00 AM - 9:00PM</Text>
            <Text style={styles.statusText}>approved by client</Text>
          </View>

        </View>
        
        </View>      
      </View>
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
  heading:{
    fontFamily: 'Inria Serif',
     fontSize: 22,
     fontWeight: '700',
     lineHeight: 29,
     letterSpacing: 0,
     textAlign: 'left',
     marginBottom: 20,
     top:22,
     left:125
 
 
   },
   select:{
    fontFamily: 'Inria Serif',
     fontSize: 15,
     fontWeight: '300',
     lineHeight: 29,
     letterSpacing: 0,
     textAlign: 'left',
     marginBottom: 20,
     top:22,
     left:55
 
 
   },
  myContainertwo: {
    width: '100%',
    height: 82,
    top: 1,
  },
 
  image: {
    width: 141,
    height: 84,
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
    width: 142,
    height: 52,
  },
  addressText: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'left',
    fontFamily: 'Inria Serif',
  },
  dateText: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'left',
    fontFamily: 'Inria Serif',
    padding: '10%',
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
  timeText: {
    width: 104,
    height: 13,
    fontWeight: '400',
    fontSize: 12,
    color: '#51EE38',
    marginTop: '10%',
  },
  statusText: {
    width: 104,
    height: 13,
    fontWeight: '400',
    fontSize: 12,
    marginTop: '10%',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#D7CCCC',
  },
  dividerThree: {
    width: '100%',
    height: 1,
    marginTop:"8%",
    backgroundColor: '#D7CCCC',
  },
  dividerTwo: {
    marginTop:"9%",
    marginBottom:"5%",
    width: 180,
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

export default CalenderMainPage;
