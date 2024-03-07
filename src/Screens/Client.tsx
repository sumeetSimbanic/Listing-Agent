import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image, TouchableHighlight} from 'react-native';
import {TextInput, List, Avatar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Client: React.FC = () => {
  const navigation = useNavigation<any>();
  const [search, setSearch] = useState<string>('');
  const [filteredClients, setFilteredClients] = useState(clients);

  useEffect(() => {
    // Filter clients based on the search term
    const filtered = clients.filter(client =>
      client.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredClients(filtered);
  }, [search]);
  const clients = [
    {id: 1, name: 'Kamlesh', avatarLabel: 'K'},
    {id: 2, name: 'Alpesh', avatarLabel: 'A'},
    {id: 3, name: 'Darshan', avatarLabel: 'D'},
    {id: 4, name: 'Rohit', avatarLabel: 'R'},
    {id: 5, name: 'Ketul', avatarLabel: 'K'},
  ];

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableHighlight onPress={() => navigation.navigate('Menu')}>
          <Image
            style={styles.drawer}
            source={require('../../images/bars.png')}
            resizeMode="cover"
          />
        </TouchableHighlight>
        <Text style={styles.heading}>Your clients</Text>
      </View>

      <View
        style={{flexDirection: 'row', alignItems: 'center', marginLeft: '4%'}}>
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

      <View>
        <List.Section>
          {clients
            .filter(client =>
              client.name.toLowerCase().includes(search.toLowerCase())
            )
            .map(filteredClient => (
              <List.Item
                key={filteredClient.id}
                titleStyle={styles.title}
                title={filteredClient.name}
                left={() => (
                  <Avatar.Text
                    size={40}
                    label={filteredClient.avatarLabel}
                  />
                )}
                onPress={() =>
                  navigation.navigate('Clientproperty', {
                    clientId: filteredClient.id,
                  })
                }
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
  imageSearch: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 20,
    zIndex: 1,
    top: 15,
  },
  input: {
    width: 335,
    height: 48,
    backgroundColor: 'white',
    color: 'black',
    paddingLeft: '10%',
    borderRadius: 9,
    borderColor: 'black',
    borderWidth: 1,
  },
  heading: {
    marginBottom: 7,
    fontWeight: 'bold',
    paddingLeft: 15,
    fontSize: 24,
    color: 'black',
    fontFamily: 'Inria Serif',
  },
  drawer: {
    width: 20,
    height: 14,

    backgroundColor: 'white',
  },
  list: {
    width: 430,
    height: 82,
    fontSize: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Inria Serif',
  },
});

export default Client;
