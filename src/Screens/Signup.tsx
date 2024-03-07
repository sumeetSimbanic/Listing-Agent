import React, { useState } from 'react';
import { View, Text,Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { Button, Checkbox } from 'react-native-paper';
import InputField from '../Components/Inputfields';
import { SignupEntity } from '../types/SignUptypes';
import SignupStyles from '../styles/SignupStyles';
import { validateUser } from '../Validations/InputValidation'; 
import initialUser from '../states/initial-user';
import CustomButtonSignup from '../Components/CustomButtonSignup';
import { signUpUser, signUpAgent } from '../services/Api';
import InputFieldPassword from '../Components/InputfieldPassword';
import CheckboxComponent from '../Components/Checkbox';

const Signup: React.FC = ({ navigation }: any) => {
  const [state, setState] = useState<SignupEntity>(initialUser);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (field: keyof SignupEntity, text: string) => {
    setState((prevState) => ({ ...prevState, [field]: text, [`${field}Error`]: '' }));
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  
  
  const handleSignUp = async () => {
    const { firstName, lastName, mobile, email, password } = state;
  
    const validationResult = validateUser({ firstName, lastName, mobile, email, password });
  
    setState((prevState) => ({
      ...prevState,
      firstNameError: validationResult.errors.firstName || '',
      lastNameError: validationResult.errors.lastName || '',
      mobileError: validationResult.errors.mobile || '',
      emailError: validationResult.errors.email || '',
      passwordError: validationResult.errors.password || '',
    }));
  
    if (validationResult.isValid && isChecked) {
      try {
        setLoading(true);
    
        console.log('User Signup Data:', { email, password });
    
        const userSignupResponse = await signUpUser(email, password);
    
        console.log('User Signup Response:', userSignupResponse);
    
        const userId = userSignupResponse.userId;
        await AsyncStorage.setItem('userId', userId);

    
        const agentEmail = `agent_${email}`;
    
        const agentSignupResponse = await signUpAgent(userId, firstName, lastName, mobile, agentEmail);
    
        console.log('Agent Signup Response:', agentSignupResponse);
    
        console.log('User and agent signed up successfully!');
        navigation.navigate('Signin');
      } catch (error) {
       
    
        if (error.response && error.response.status === 400 && error.response.data.message === 'Email already exists') {
          // Display an alert if the email already exists
          Alert.alert('Error', 'Email already exists. Please use a different email.');
        } else {
          console.log('An unexpected error occurred during signup.');
    
          // Display a generic error alert
          Alert.alert('Error', 'An unexpected error occurred during signup.');
        }
      } finally {
        setLoading(false);
      }
    } else {
     Alert.alert('Error','Please fill in all fields correctly and accept the Terms of Service and Privacy Policy.');

      console.log('Please fill in all fields correctly and accept the Terms of Service and Privacy Policy.');
    }
  };
  return (
    <View style={SignupStyles.container}>
      <Text style={SignupStyles.heading}>Sign Up</Text>

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

      <InputFieldPassword
        label="Password"
        value={state.password}
        onChangeText={(text) => handleInputChange('password', text)}
        error={state.passwordError}
        secureTextEntry
      />

      <View style={SignupStyles.checkboxContainer}>
      <CheckboxComponent isChecked={isChecked} onChange={handleCheckboxChange} label="" />
      </View>


        <Text style={SignupStyles.textTerm}>
          <Text style={SignupStyles.blueText}>By signing up you accept </Text> the
          Terms of Service <Text style={SignupStyles.blueText}>and</Text> Privacy
          Policy
        </Text>
<View style={{bottom:30}}>
      <CustomButtonSignup onPress={handleSignUp} label="SignUp" style={SignupStyles.button} />

      </View>
      <Text style={SignupStyles.textStyle}>
        Already have an account?{' '}
        <Text
          style={SignupStyles.blueText}
          onPress={() => navigation.navigate('Signin')}>
          SignIn
        </Text>
      </Text>
    </View>
  );
};

export default Signup;
