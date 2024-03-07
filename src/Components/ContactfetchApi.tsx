// contactsApi.js
import Contacts from 'react-native-contacts';

const fetchContacts = () => {
  return Contacts.getAll()
    .then((fetchedContacts) => {
      return fetchedContacts;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export default fetchContacts;
