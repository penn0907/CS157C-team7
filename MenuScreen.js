import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, Dimensions } from 'react-native';
import ProfileScreen from './ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({navigation} ) => {
  const buttonSize = Dimensions.get('window').width / 2; // Making buttons bigger

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, { width: buttonSize, height: buttonSize, borderRadius: buttonSize / 2 }]} onPress={() => navigation.navigate('ProfileScreen')} >
        <Image source={require('/Users/pranavichaturvedula/Desktop/Mental_Health_Care/assets/profile.jpg')} style={styles.image} />
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.button, { width: buttonSize, height: buttonSize, borderRadius: buttonSize / 2 }]} onPress={() => console.log('Friends')}>
        <Image source={require('/Users/pranavichaturvedula/Desktop/Mental_Health_Care/assets/Frends.jpg')} style={styles.image} />
        <Text style={styles.text}>Friends</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.button, { width: buttonSize, height: buttonSize, borderRadius: buttonSize / 2 }]} onPress={() =>navigation.navigate('TherapistScreen')}>
        <Image source={require('/Users/pranavichaturvedula/Desktop/Mental_Health_Care/assets/therapy.jpg')} style={styles.image} />
        <Text style={styles.text}>Therapist</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0eae3', // Aesthetic background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Button background color
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 20, // Add space between buttons
  },
  image: {
    width: '80%', // Adjust according to your needs
    height: '80%', // Keep the aspect ratio
    borderRadius: Dimensions.get('window').width / 3 / 2, // Making the image circular and adjust size as needed
  },
  text: {
    marginTop: 10,
    fontSize: 14,
    color: '#333',
  },
});

export default HomeScreen;
