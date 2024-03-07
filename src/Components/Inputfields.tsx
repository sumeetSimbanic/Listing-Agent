// InputField.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import SignupStyles from '../styles/SignupStyles';

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error: string;
  keyboardType?: string;
  secureTextEntry?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChangeText,
  error,
  keyboardType,
  secureTextEntry,
}) => (
  <View style={SignupStyles.inputContainer}>
    <Text style={SignupStyles.label}>{label}</Text>
    <TextInput
      value={value}
      label={`Please Enter Your ${label}`}
      onChangeText={(text) => onChangeText(text)}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      style={SignupStyles.input}
    />
    {error !== '' && <Text style={SignupStyles.errorText}>{error}</Text>}
  </View>
);

export default InputField;
