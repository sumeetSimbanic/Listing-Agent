// Signin.tsx
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Checkbox, Button } from 'react-native-paper';
import InputField from '../Components/Inputfields';
import SignInStyles from '../styles/SigninStyles';
import { SigninEntity } from '../types/SignUptypes';
import initialSignin from '../states/initial-signin';
import { validateUser } from '../Validations/InputValidation'; 

const Signin: React.FC = ({ navigation }: any) => {
  const [state, setState] = useState<SigninEntity>(initialSignin);
  const [isChecked, setChecked] = useState<boolean>(false);

  const handleInputChange = (field: keyof SigninEntity, text: string) => {
    setState((prevState) => ({ ...prevState, [field]: text }));
  };

  const handleSignIn = () => {
    const { email, password } = state;

    // Use validateUser function to get validation results
    const validationResult = validateUser({ firstName: '', lastName: '', mobile: '', email, password });

    // Update the error states with validation results
    setState((prevState) => ({
      ...prevState,
      emailError: validationResult.errors.email || '',
      passwordError: validationResult.errors.password || '',
    }));

    // Check if all fields are valid and the checkbox is checked
    if (validationResult.isValid && isChecked) {
      console.log('Signing in...');
      // Add your sign-in logic here
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

      <InputField
        label="Password"
        value={state.password}
        onChangeText={(text) => handleInputChange('password', text)}
        error={state.passwordError}
        secureTextEntry
      />

      <View style={SignInStyles.checkboxContainer}>
        <Checkbox.Android
          status={isChecked ? 'checked' : 'unchecked'}
          onPress={() => setChecked(!isChecked)}
          color="black"
        />

        <Text>
          Remember me{' '}
          {'                             '}
          <Text style={SignInStyles.blueText}>Forgot password?</Text>
        </Text>
      </View>

      <View style={SignInStyles.dividercontainer}>
        <View style={SignInStyles.divider} />
        <View style={SignInStyles.textContainer}>
          <Text style={SignInStyles.text}>OR</Text>
        </View>
        <View style={SignInStyles.divider} />
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
