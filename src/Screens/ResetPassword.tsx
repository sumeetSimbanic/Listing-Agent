import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import InputField from '../Components/Inputfields';
import {  resetPassword } from '../services/Api'; // Import your API functions

const ResetPassword: React.FC = ({ navigation }: any) => {
  const [state, setState] = useState({
    password: '',
    confirmPassword: '',
    passwordError: '',
    confirmPasswordError: '',
  });

  const handleInputChange = (field: string, text: string) => {
    setState({
      ...state,
      [field]: text,
      [`${field}Error`]: '', // Clear error when the user starts typing
    });
  };

  const handleResetPassword = async () => {
    // Add validation logic here
    if (state.password.length < 6 || state.confirmPassword.length < 6) {
      Alert.alert('Error', 'Passwords must be at least 6 characters long');
      return;
    }

    if (state.password !== state.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    // Call resetPassword API
    try {
      const resetPasswordResponse = await resetPassword(state.password, 'resetToken'); // Replace 'resetToken' with the actual reset token
      // Handle success, e.g., show a success message or navigate to a new screen
      Alert.alert('Success', resetPasswordResponse.message);
    } catch (error) {
      // Handle error, e.g., show an error message
      Alert.alert('Error', 'Failed to reset password');
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Reset Password</Text>

      <InputField
        label="Password"
        value={state.password}
        onChangeText={(text) => handleInputChange('password', text)}
        error={state.passwordError}
        secureTextEntry
      />

      <InputField
        label="Confirm Password"
        value={state.confirmPassword}
        onChangeText={(text) => handleInputChange('confirmPassword', text)}
        error={state.confirmPasswordError}
        secureTextEntry
      />

      <Button mode="contained" onPress={handleResetPassword} style={styles.button}>
        <Text style={{ fontSize: 20, fontFamily: 'inria Serif' }}>Confirm</Text>
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    width: 165,
    height: 40,
    marginTop: 40,
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
 
});

export default ResetPassword;
