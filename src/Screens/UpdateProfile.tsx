import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import InputField from '../Components/Inputfields';
import { SignupEntity } from '../types/SignUptypes';
import SignupStyles from '../styles/SignupStyles';
import { validateUser } from '../Validations/InputValidation';
import initialUser from '../states/initial-user';
import CustomButtonSignup from '../Components/CustomButtonSignup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import jwt_decode from 'jwt-decode'; // Import jwt-decode library for decoding JWT


const UpdateProfile: React.FC = ({ navigation }: any) => {
  const [state, setState] = useState<SignupEntity>(initialUser);
  const [isChecked, setChecked] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [userData, setUserData] = useState<any>(null); // Assuming user data structure
const [userToken ,setUserToken]=useState("")
  useEffect(() => {
    const retrieveUserIdAndCallApi = async () => {
      try {
       
        const storedToken = await AsyncStorage.getItem('userToken');
        setUserToken(storedToken);
        console.log('Stored Token:', storedToken);

        // Call API only if userId is available
        if (storedUserId) {
          const response = await axios.get(`http://104.237.141.171:3000/agent/${userId}`, {});
          setUserData(response.data);

          // Decode JWT token and log the decoded information
          if (storedToken) {
            const decodedToken = jwt_decode(storedToken);
            console.log('Decoded Token:', decodedToken);
          }
        }
      } catch (error) {
        console.error('Error retrieving userId or making API call:', error);
      }
    };

    retrieveUserIdAndCallApi();
  }, []); 


  const handleInputChange = (field: keyof SignupEntity, text: string) => {
    setState((prevState) => ({ ...prevState, [field]: text, [`${field}Error`]: '' }));
  };

  return (
    <View style={SignupStyles.container}>
      <Text style={SignupStyles.heading}>Profile</Text>

      {/* Render user data or any other components based on the API response */}
      {userData && (
        <View>
          <Text>User Name: {userData.userName}</Text>
          {/* Add more fields as needed */}
        </View>
      )}

      <InputField
        label="First-Name"
        value={state.firstName}
        onChangeText={(text) => handleInputChange('firstName', text)}
        error={state.firstNameError}
      />

      <InputField
        label="Last-Name"
        value={state.lastName}
        onChangeText={(text) => handleInputChange('lastName', text)}
        error={state.lastNameError}
      />

      <InputField
        label="Mobile Number"
        value={state.mobile}
        onChangeText={(text) => handleInputChange('mobile', text)}
        error={state.mobileError}
        keyboardType="numeric"
      />

      <InputField
        label="Email"
        value={state.email}
        onChangeText={(text) => handleInputChange('email', text)}
        error={state.emailError}
        keyboardType="email-address"
      />

      <CustomButtonSignup onPress={() => navigation.navigate('Client')} label="Update Profile" style={SignupStyles.button} />
    </View>
  );
};

export default UpdateProfile;
