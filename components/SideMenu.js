import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

var {width, height} = Dimensions.get('window');


export default function SideMenu({ isOpen, onClose }) {
  if (!isOpen) {
    return null; // Don't render the menu if it's closed
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuItem} onPress={onClose}>
        <Text style={styles.menuItemText}>Item 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={onClose}>
        <Text style={styles.menuItemText}>Item 2</Text>
      </TouchableOpacity>
      {/* Add more menu items as needed */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0, // Adjust the top position as needed
    left: 0,
    height: height,
    backgroundColor: 'black', // Background color
    borderRadius: 0, // Add some rounded corners
    padding: 10,
    shadowColor: 'rgba(0, 0, 0, 0.1)', // Add shadow
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3, // Android shadow
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray', // Separator between items
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
