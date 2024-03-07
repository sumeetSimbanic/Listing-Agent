import {  StyleSheet} from 'react-native';

const SignInStyles = StyleSheet.create({
    container: {
      padding: 16,
    },
  
    inputContainer: {
      marginBottom: 16,
    },
    dividercontainer: {
      flexDirection: 'row',
      alignItems: 'center',
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
      errorText: {
      fontSize: 10, // Adjust the size as needed
      color: 'red',
      marginTop: 1, // Add some margin to separate from the input field
    },
   
    heading:{
     fontFamily: 'Inria Serif',
      fontSize: 24,
      fontWeight: '700',
      lineHeight: 29,
      letterSpacing: 0,
      textAlign: 'left',
      marginBottom: 20,
  
  
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
      marginTop: 10,
      marginLeft:"25%",
      backgroundColor: '#7662F1',
      borderRadius: 8,
      marginBottom: 8,
    },
    divider: {
      flex: 1,
      height: 1,
      backgroundColor: '#0000006E', 
      marginVertical: 10,
   
    },
    textContainer: {
      marginHorizontal: 10,
    },
    text: {
      color: 'black',
      backgroundColor:"#CAC1C170"
  
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 26,
    },
    checkboxLabel: {
      marginLeft: 2,
      fontSize: 14,
      color: 'black',
    },
    textStyle: {
      marginLeft: "15%",
      marginTop:10,
      fontSize: 14,
      color: 'black',
    },
  });
  export default SignInStyles