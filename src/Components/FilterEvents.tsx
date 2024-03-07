import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FilterEvents = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('day');

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity
        style={[styles.filterButton, activeFilter === 'day' && styles.activeFilter]}
        onPress={() => handleFilterChange('day')}
      >
        <Text style={styles.filterText}>Day</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.filterButton, activeFilter === 'week' && styles.activeFilter]}
        onPress={() => handleFilterChange('week')}
      >
        <Text style={styles.filterText}>Week</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.filterButton, activeFilter === 'month' && styles.activeFilter]}
        onPress={() => handleFilterChange('month')}
      >
        <Text style={styles.filterText}>Month</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.filterButton, activeFilter === 'year' && styles.activeFilter]}
        onPress={() => handleFilterChange('year')}
      >
        <Text style={styles.filterText}>Year</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 5,
  },
  activeFilter: {
    backgroundColor: 'blue',
    borderColor: 'blue',
  },
  filterText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default FilterEvents;
