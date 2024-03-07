import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';

const CalenderDayPage = () => {
  const [items, setItems] = useState({});
  const [activeFilter, setActiveFilter] = useState('day');

  // Define a debounced function using useCallback
  const debouncedLoadItems = useCallback(
    debounce((day, filter) => loadItems(day, filter), 300),
    []
  );

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    debouncedLoadItems({ date: '2024-02-21' }, filter);
  };

  // Debounce function to delay execution
  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  }

  const loadItems = async (day, filter = activeFilter) => {
    try {
      const newData = await fetchData(day, filter);
      setItems(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchData = async (day, filter) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let newItems = {};
        if (filter === 'day') {
          newItems[day.date] = [
            { name: 'Meeting 1', time: '10:00 AM' },
            { name: 'Team Lunch', time: '12:30 PM' },
          ];
        } else if (filter === 'week') {
          newItems = {
            '2024-02-20': [{ name: 'Meeting 1', time: '10:00 AM' }],
            '2024-02-21': [{ name: 'Team Lunch', time: '12:30 PM' }],
            '2024-02-22': [{ name: 'Client Call', time: '2:00 PM' }],
          };
        } else if (filter === 'month') {
          const monthStart = day.date.substring(0, 8) + '01';
          const monthEnd = day.date.substring(0, 8) + '31';
          newItems = {
            '2024-02-05': [{ name: 'Workshop', time: '11:00 AM' }],
            '2024-02-15': [{ name: 'Review Meeting', time: '3:00 PM' }],
            '2024-02-25': [{ name: 'End of Month Presentation', time: '10:00 AM' }],
          };
        }
        resolve(newItems);
      }, 500); // Simulated delay
    });
  };

  useEffect(() => {
    loadItems({ date: '2024-02-20' });
  }, []);

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text>{item.name}</Text>
        <Text>{item.time}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterButtons}>
        <TouchableOpacity onPress={() => handleFilterChange('day')}>
          <Text style={styles.buttonText}>Day</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFilterChange('week')}>
          <Text style={styles.buttonText}>Week</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFilterChange('month')}>
          <Text style={styles.buttonText}>Month</Text>
        </TouchableOpacity>
      </View>
      <Agenda
        style={styles.agenda}
        items={items}
        loadItemsForMonth={(month) => loadItems({ date: month.dateString }, activeFilter)}
        selected={'2024-02-20'}
        renderItem={renderItem}
        theme={{
          agendaDayTextColor: 'blue',
          agendaDayNumColor: 'blue',
          agendaTodayColor: 'red',
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  agenda: {
    flex: 0,
    width: '100%',
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  buttonText: {
    margin: 10,
    color: 'blue',
  },
});

export default CalenderDayPage;
