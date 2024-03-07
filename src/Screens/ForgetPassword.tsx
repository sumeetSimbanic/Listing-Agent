import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import InputField from '../Components/Inputfields';
import SignInStyles from '../styles/SigninStyles';
import { validateEmail } from '../Validations/InputValidation';
import { forgetPassword } from '../services/Api'; // Import your forgetPassword API function

const ForgetPassword: React.FC = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSendButtonPressed, setIsSendButtonPressed] = useState(false);

  const handleEmailChange = (text: string) => {
    setEmail(text);
    
    // Check for email format only when the Send button is pressed
    if (isSendButtonPressed) {
      const isValidEmail = validateEmail(text);
      setEmailError(isValidEmail ? '' : 'Invalid email format');
    }
  };

  const handleSignIn = async () => {
    // Set the Send button as pressed
    setIsSendButtonPressed(true);

    // Validate email before attempting login
    if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      return;
    }

    try {
      // Make a forgetPassword request using the api function
      const response = await forgetPassword(email);
      
      // Log the response for debugging
      console.log('Forget Password response:', response);
      
      // Handle the response accordingly
      if (response.success) {
        console.log('Forget Password successful!');
        // Navigate to another screen after success
        Alert.alert('Alert', 'Open your mail and reset password and then come back and again sign with a new password');
      } else {
        // Handle different error scenarios
        console.log('Forget Password failed. An unexpected error occurred.');
        // Display the success message or a generic error message using Alert
        Alert.alert('Alert', 'Incorrect Email Address');
      }
    } catch (error) {
      // Display a generic error message using Alert
      Alert.alert('', 'Incorrect Email Address');
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Forget Password</Text>

      <InputField
        label="Email"
        value={email}
        onChangeText={handleEmailChange}
        error={isSendButtonPressed ? emailError : ''}
        keyboardType="email-address"
      />

      <View style={styles.dividercontainer}>
        <View style={SignInStyles.divider} />
        <View style={SignInStyles.textContainer}>
          <Text style={SignInStyles.text}>OR</Text>
        </View>
        <View style={SignInStyles.divider} />
      </View>

      <Button mode="contained" onPress={handleSignIn} style={styles.button}>
        <Text style={{ fontSize: 20, fontFamily: 'inria Serif' }}>Send</Text>
      </Button>


      <Text style={SignInStyles.textStyle}>
        Don't have an account?
        <Text style={SignInStyles.blueText} onPress={() => navigation.navigate('Signup')}>
          {' '}
          Create a new one{' '}
        </Text>{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 165,
    height: 40,
    marginTop: 30,
    marginLeft: '27%',
    backgroundColor: '#7662F1',
    borderRadius: 8,
    marginBottom: 8,
  },
  container: {
    padding: 10,
  },
  heading: {
    fontFamily: 'Inria Serif',
    fontSize: 20,
    paddingLeft: 110,
    paddingTop: 20,
    fontWeight: '700',
  },
  dividercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
  },
});

export default ForgetPassword;
