import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, PermissionsAndroid ,Image} from 'react-native';
import { TextInput, List, Avatar, Button } from 'react-native-paper';
import Contacts from 'react-native-contacts';


const InviteBuyer: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    requestContactsPermission(); // Request contacts permission when the component mounts
  }, []);

  const requestContactsPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts Permission',
          message: 'This app needs access to your contacts to function properly.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Contacts permission granted');
        fetchContacts(); // Fetch contacts if permission is granted
      } else {
        console.warn('Contacts permission denied');
        // Handle the case where the user denied permission
      }
    } catch (error) {
      console.error('Error requesting contacts permission:', error);
    }
  };

  const fetchContacts = () => {
    Contacts.getAll()
      .then((fetchedContacts) => {
        setContacts(fetchedContacts);
      })
      .catch((error) => {
        console.error('Error fetching contacts:', error);
      });
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.displayName.toLowerCase().includes(search.toLowerCase()) ||
      (contact.phoneNumbers &&
        contact.phoneNumbers.some((number) => number.number.includes(search)))
  );

  const handleInvite = (contact) => {
    // Implement your logic to handle the invite action
    console.log(`Inviting ${contact.displayName} (${contact.phoneNumbers[0].number})`);
    // Add your invitation logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Invite Your Contact:</Text>

      <View style={{ flexDirection: "row", alignItems: "center", marginLeft: '4%' }}>
        <Image
          source={require('../../images/search.png')}
          style={styles.imageSearch}
        />
        <TextInput
          value={search}
          label="Search..."
          onChangeText={text => setSearch(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.listContainer}>
        <List.Section>
          {filteredContacts.map((contact) => (
            <List.Item
              key={contact.recordID}
              titleStyle={styles.title}
              descriptionStyle={styles.description}
              title={contact.displayName}
              description={contact.phoneNumbers[0].number}
              left={() => (
                <Avatar.Text style={styles.avatar} size={24} label={contact.displayName[0]} />
              )}
              right={() => (
                <Button
                  mode="contained"
                  textColor="black"
                  buttonColor="#CAC8C8"
                  style={styles.inviteButton}
                  onPress={() => handleInvite(contact)}>
                  Invite
                </Button>
              )}
            />
          ))}
        </List.Section>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 0,
  },
  input: {
    width: 335,
    height: 48,
    backgroundColor: 'white',
    color: 'black',
    paddingLeft:"10%",
    borderRadius: 9,
    borderColor: 'black',
    borderWidth: 1,
  },
  heading: {
    marginBottom: 10,
    fontWeight: '700',
    paddingLeft: 15,
    fontSize: 20,

    color: 'black',
    fontFamily: 'Inria Serif',
  },
  imageSearch: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 20, // Adjust the position as needed
    zIndex: 1,
    top:15

  },
  list: {
    width: 430,
    height: 82,
    fontSize: 30,
  },
  title: {
    fontSize: 16,

    fontWeight: '700',
    fontFamily: 'Inria Serif',
  },
  listContainer: {
    width: 430,
    flexGrow: 1,
    height: 'auto',
    left:"-5%",
    paddingLeft:"5%",
    marginTop:"10%",
    backgroundColor:"#CAC8C8"
  },

  description: {
    fontSize: 15,
    fontWeight: '300',

    fontFamily: 'Inria Serif',
  },
  avatar: {
    marginTop: '3%',
  },

  inviteButton: {
    marginRight: '10%',
    borderWidth: 0.5,
    borderColor: 'black',
    width: 98,
    borderRadius: 9,
  },
  inviteButtonText: {
    color: 'black',
    width: 10,
    height: 10,
    paddingBottom: '10%',
  },
});

export default InviteBuyer;

