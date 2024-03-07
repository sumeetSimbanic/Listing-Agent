// UpdateProfile.tsx
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import InputField from '../Components/Inputfields';
import { SignupEntity } from '../types/SignUptypes';
import SignupStyles from '../styles/SignupStyles';
import { validateUser } from '../Validations/InputValidation'; 
import initialUser from '../states/initial-user';
import CustomButtonSignup from '../Components/CustomButtonSignup';


const UpdateProfile: React.FC = ({ navigation }: any) => {
  const [state, setState] = useState<SignupEntity>(initialUser);
  const [isChecked, setChecked] = useState<boolean>(false);

  const handleInputChange = (field: keyof SignupEntity, text: string) => {
    setState((prevState) => ({ ...prevState, [field]: text, [`${field}Error`]: '' }));
  };

  const handleSignUp = () => {
    const { firstName, lastName, mobile, email, password } = state;

    // Use validateUser function to get validation results
    const validationResult = validateUser({ firstName, lastName, mobile, email, password });

    // Update the error states with validation results
    setState((prevState) => ({
      ...prevState,
      firstNameError: validationResult.errors.firstName || '',
      lastNameError: validationResult.errors.lastName || '',
      mobileError: validationResult.errors.mobile || '',
      emailError: validationResult.errors.email || '',
      passwordError: validationResult.errors.password || '',
    }));

    if (validationResult.isValid && isChecked) {
      console.log('Signing up...');
      navigation.navigate('Client');
    } else {
      console.log('Please fill in all fields correctly and accept the Terms of Service and Privacy Policy.');
    }
  };

  return (
    <View style={SignupStyles.container}>
      <Text style={SignupStyles.heading}>Profile...</Text>

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

      <InputField
        label="Password"
        value={state.password}
        onChangeText={(text) => handleInputChange('password', text)}
        error={state.passwordError}
        secureTextEntry
      />

  
      <CustomButtonSignup onPress={handleSignUp} label="SignIn" style={SignupStyles.button} />

    </View>
  );
};

export default UpdateProfile;
