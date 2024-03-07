import React from 'react';
import { Button } from 'react-native-paper';
import { Text, TextStyle, ViewStyle } from 'react-native';

interface CustomButtonProps {
  onPress: () => void;
  label: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, label, buttonStyle, textStyle }) => {
  return (
    <Button mode="contained" onPress={onPress} style={[buttonStyle]}>
      <Text style={[{ fontSize: 20, fontFamily: 'inria Serif' }, textStyle]}>{label}</Text>
    </Button>
  );
};

export default CustomButton;
