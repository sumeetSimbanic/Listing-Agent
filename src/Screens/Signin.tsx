import React, { useState } from 'react';
import { View, Text, Alert, Image } from 'react-native';
import { Checkbox, Button } from 'react-native-paper';
import InputField from '../Components/Inputfields';
import SignInStyles from '../styles/SigninStyles';
import { SigninEntity } from '../types/SignUptypes';
import initialSignin from '../states/initial-signin';
import { validateSignIn } from '../Validations/InputValidation';
import { loginUser } from '../services/Api';
import InputFieldPassword from '../Components/InputfieldPassword';
import CheckboxComponent from '../Components/Checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signin: React.FC = ({ navigation }: any) => {
  const [state, setState] = useState<SigninEntity>(initialSignin);
  const [isChecked, setIsChecked] = useState<boolean>(false); 

  const handleInputChange = (field: keyof SigninEntity, text: string) => {
    setState((prevState) => ({ ...prevState, [field]: text }));
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the checkbox state
  };

  const handleSignIn = async () => {
    const { email, password } = state;

    // Use validateSignIn function to get validation results
    const validationResult = validateSignIn({ email, password });

    // Update the error states with validation results
    setState((prevState) => ({
      ...prevState,
      emailError: validationResult.errors.email || '',
      passwordError: validationResult.errors.password || '',
    }));

    // Check if all fields are valid and the checkbox is checked
    if (validationResult.isValid && isChecked) {
      try {
        // Make a login request using the api function
        const response = await loginUser(email, password);

        // Log the response for debugging
        console.log('Login response:', response);

        // Handle the response accordingly
        if (response.status) {
          console.log('Login successful!');
          await AsyncStorage.setItem('userToken', response.token);
console.log("SSSSSS",response.token)
          // Redirect to the BottomBar screen upon successful login
          navigation.navigate('BottomBar');
        } else {
          // Check for specific error message "Invalid credentials"
          if (response.message === 'Invalid credentials') {
            console.log('Login failed. Invalid username or password.');
            // Display a warning using Alert
            Alert.alert('Invalid Credentials', 'Invalid username or password. Please try again.');
          } else {
            // Handle other error scenarios if needed
            console.log('Login failed. An unexpected error occurred.');
            // Display a generic error message using Alert
            Alert.alert('Invalid Credentials', 'Invalid username or password. Please try again.');
          }
        }
      } catch (error) {
        // Handle other errors (e.g., network issues)

        // Display a generic error message using Alert
        Alert.alert('Invalid Credentials', 'Invalid username or password. Please try again.');
      }
    } else {
      console.log('Please fill in all fields correctly and accept the Terms of Service and Privacy Policy.');
    }
  };




  return (
    <View style={SignInStyles.container}>
      <Text style={SignInStyles.heading}>Sign in</Text>

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

      <View style={SignInStyles.checkboxContainer}>
      <CheckboxComponent label="" isChecked={isChecked} onChange={handleCheckboxChange} />

        <Text>
          Remember me{' '}
          {'                             '}
          <Text style={SignInStyles.blueText} onPress={()=>navigation.navigate("ForgetPassword")}>Forgot password?</Text>
        </Text>
      </View>

      <View style={SignInStyles.dividercontainer}>
        <View style={SignInStyles.divider} />
        <View style={SignInStyles.textContainer}>
          <Text style={SignInStyles.text}>OR</Text>
        </View>
        <View style={SignInStyles.divider} />
      </View>
<View style={{flexDirection:"row"}}>
<View style={SignInStyles.image}>
            <Image
              style={SignInStyles.imageStyle}
              source={require('../../images/facebook.png')}
              resizeMode="cover"
            />
          </View>
          <View style={SignInStyles.image}>
            <Image
              style={SignInStyles.imageStyle}
              source={require('../../images/google.png')}
              resizeMode="cover"
            />
          </View>
          <View style={SignInStyles.image}>
            <Image
              style={SignInStyles.imageStyle}
              source={require('../../images/cloud.png')}
              resizeMode="cover"
            />
          </View>
</View>

      <Button mode="contained" onPress={handleSignIn} style={SignInStyles.button}>
        <Text style={{ fontSize: 20, fontFamily: 'inria Serif' }}>Signin</Text>
      </Button>

      <Text style={SignInStyles.textStyle}>
        Don't have an account?
        <Text style={SignInStyles.blueText} onPress={() => navigation.navigate('Signup')}>
          {' '}
          Create new one{' '}
        </Text>{' '}
      </Text>
    </View>
  );
};

export default Signin;
