// CustomButton.tsx
import React from 'react';
import { Button } from 'react-native-paper';

interface CustomButtonProps {
  onPress: () => void;
  label: string;
  style?: object;
}

const CustomButtonSignup: React.FC<CustomButtonProps> = ({ onPress, label, style }) => {
  return (
    <Button mode="contained" onPress={onPress} style={style}>
      {label}
    </Button>
  );
};

export default CustomButtonSignup;
