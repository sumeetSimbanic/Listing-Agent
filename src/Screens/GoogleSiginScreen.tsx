// import React,{useState} from 'react';
// import { View, Button } from 'react-native';
// import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';


// export default function GoogleSiginScreen() {
// 	const [error, setError] = useState('');
// 	const signIn = async () => {
// 		try {
// 		  await GoogleSignin.hasPlayServices();
// 		  const userInfo = await GoogleSignin.signIn();
// 		  console.log(userInfo);
// 		  // Handle the user information as needed
// 		} catch (error) {
// 		  console.error(error);
// 		}
// 	  };
	
// 	  const signOut = async () => {
// 		try {
// 		  await GoogleSignin.revokeAccess();
// 		  await GoogleSignin.signOut();
// 		  // Perform sign-out actions
// 		} catch (error) {
// 		  console.error(error);
// 		}
// 	  };
	
// 	  return (
// 		<View>
// 		  <GoogleSigninButton
// 			style={{ width: 192, height: 48 }}
// 			size={GoogleSigninButton.Size.Wide}
// 			color={GoogleSigninButton.Color.Light}
// 			onPress={signIn}
// 		  />
	
// 		  <Button title="Sign Out" onPress={signOut} />
// 		</View>
// 	  );
// 	};