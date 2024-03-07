import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, List, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook

const Client: React.FC = () => {
  const navigation = useNavigation<any>(); 
  const [search, setSearch] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your client</Text>

      <TextInput
        value={search}
        label="Search..."
        onChangeText={(text) => setSearch(text)}
        style={styles.input}
      />
      <View>
        <List.Section>
          <List.Item
            titleStyle={styles.title}
            title="kamlesh"
            left={() => <Avatar.Text size={40} label="K" />}
            onPress={() => navigation.navigate('Clientproperty')}
          />
          <List.Item
            titleStyle={styles.title}
            title="Alpesh"
            left={() => <Avatar.Text size={40} label="A" />}
          />
          <List.Item
            titleStyle={styles.title}
            title="Darshan"
            left={() => <Avatar.Text size={40} label="D" />}
          />
          <List.Item
            titleStyle={styles.title}
            title="Rohit"
            left={() => <Avatar.Text size={40} label="R" />}
          />
          <List.Item
            titleStyle={styles.title}
            title="Ketul"
            left={() => <Avatar.Text size={40} label="K" />}
          />
        </List.Section>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex:0
      },
      input: {
        width: 335,
        height: 48,
        marginLeft:"4%",
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 9,
        borderColor: 'black',
        borderWidth: 1,
      },
      heading:{
        marginBottom: 30,
        fontWeight: 'bold', 
        paddingLeft:15,
        fontSize: 24,
        color: 'black',
        fontFamily:"Inria Serif"
    
      },
      list:{
        width: 430,
        height: 82,
        fontSize: 30, 
    
       
      },
      title: {
          fontSize: 20,
          fontWeight: '700',
          fontFamily:"Inria Serif"
        },
});

export default Client;
