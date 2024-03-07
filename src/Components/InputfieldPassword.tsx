// InputFieldPassword.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableWithoutFeedback } from 'react-native';
import SignupStyles from '../styles/SignupStyles';

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error: string;
  keyboardType?: string;
}

const InputFieldPassword: React.FC<InputFieldProps> = ({
  label,
  value,
  onChangeText,
  error,
  keyboardType,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const eyeIcon = showPassword
    ? require('../../images/hide.png') // Update with the actual path to your first eye icon
    : require('../../images/eye.png'); // Update with the actual path to your second eye icon

  return (
    <View style={SignupStyles.inputContainer}>
      <Text style={SignupStyles.label}>{label}</Text>
      <TextInput
        value={value}
        placeholder={`Please Enter Your ${label}`}
        onChangeText={(text) => onChangeText(text)}
        keyboardType={keyboardType}
        secureTextEntry={!showPassword}
        style={SignupStyles.input}
      />
      <TouchableWithoutFeedback onPress={() => setShowPassword(!showPassword)}>
        <Image source={eyeIcon} style={SignupStyles.eyeIcon} resizeMode="contain" />
      </TouchableWithoutFeedback>
      {error !== '' && <Text style={SignupStyles.errorText}>{error}</Text>}
    </View>
  );
};

export default InputFieldPassword;
