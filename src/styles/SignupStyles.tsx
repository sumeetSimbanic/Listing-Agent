import { StyleSheet} from 'react-native';

const SignupStyles = StyleSheet.create({
    container: {
      padding: 16,
    },
    inputContainer: {
      width: 350,
      height: 74,
      top: 25,
      left: 6,
      marginTop: '3%',
    },
    input: {
      width: 350,
      height: 50,
      backgroundColor: 'white',
      color: 'black',
      paddingHorizontal: 10,
      borderRadius: 9,
      borderColor: 'black',
      borderWidth: 1,
    },
  
    heading: {
      fontFamily: 'Inria Serif',
      fontSize: 24,
      fontWeight: '700',
      lineHeight: 29,
      letterSpacing: 0,
      textAlign: 'left',
    },
    label: {
      fontFamily: 'Inter',
      fontSize: 14,
      fontWeight: '300', // Note: '300' is equivalent to 'normal'
      lineHeight: 17,
      letterSpacing: 0,
      textAlign: 'left',
    },
    blueText: {
      color: '#1B00BF',
    },
    button: {
      width: 165,
      height: 40,
      marginTop: 45,
      marginLeft: '25%',
      backgroundColor: '#7662F1',
      borderRadius: 8,
      marginBottom: 8,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
      width: 316,
      height: 35,
      top: 45,
    },
    checkboxLabel: {
      marginLeft: 2,
      fontSize: 14,
      color: 'black',
    },
    textStyle: {
      marginLeft: '15%',
      fontSize: 15,
      color: 'black',
    },
    textTerm: {
      marginLeft: '1%',
      fontSize: 15,
      color: 'black',
    },
    errorText: {
      fontSize: 10, // Adjust the size as needed
      color: 'red',
      marginTop: 1, // Add some margin to separate from the input field
    },
  });
  export default SignupStyles