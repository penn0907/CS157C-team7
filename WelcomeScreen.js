import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
    return (
      <ImageBackground
        source={require('/Users/pranavichaturvedula/Desktop/Mental_Health_Care/assets/Titlepahe.jpg')} // Update the path to your image
        style={styles.background}
      >
        {/* Container for the welcome message aligned to the top */}
        <View style={styles.topContainer}>
          <Text style={styles.title}>Breathe</Text>
          <Text style={styles.subtitle}>Connect, Share, Thrive</Text>
        </View>

        {/* Spacer view to push the button to the bottom */}
        <View style={styles.spacer} />

        {/* TouchableOpacity for the button aligned to the bottom */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MenuScreen')} // Adjust navigation as needed
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'space-between', // Adjusts children to start and end of container
  },
  topContainer: {
    marginTop: 60, // Adjust as needed for spacing from the top
    alignItems: 'center',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    fontFamily: 'Roboto',  
      color: '#fff',
    textAlign: 'center',
  },
  spacer: {
    flex: 1, // This pushes the button to the bottom
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Roboto',    color: '#fff',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '', // Set the background color to violet
    paddingVertical: 12, // Vertical padding
    paddingHorizontal: 20, // Horizontal padding
    borderRadius: 25, // Rounded corners
    alignSelf: 'center', // Center the button horizontally
    width: '90%', // Make the button take up 90% of the container width
    marginBottom: 30, // Space from the bottom
  },
  buttonText: {
    textAlign: 'center', // Center the text inside the button
    color: '#FFFFFF', // White text color
    fontSize: 18, // Text size
    fontWeight: 'bold', // Bold text
  },
});

export default WelcomeScreen;
