import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  // Dummy data for mental health issues
  const issues = ['Anxiety', 'Depression', 'Stress'];

  return (
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.profileSection}>
            <Image 
              source={{ uri: '/Users/pranavichaturvedula/Desktop/Mental_Health_Care/assets/profile.jpg' }} // Replace with your image URI
              style={styles.profileImage}
            />
            <View style={{ justifyContent: 'center', marginLeft: 10 }}>
              <Text style={styles.name}>John Doe</Text>
            </View>
          </View>
          <Text style={styles.exhaleText}>Exhale</Text>
          <View style={styles.issuesSection}>
            {issues.map((issue, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.issueButton}
                onPress={() => navigation.navigate('IssueScreen', { issueName: issue })}
              >
                <Text style={styles.issueButtonText}>{issue}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* New Image at the end of the ScrollView */}
          <TouchableOpacity>
        <Image source={require('/Users/pranavichaturvedula/Desktop/Mental_Health_Care/assets/Mood tracker.jpg')} style={styles.image} />
        <Text style={styles.text}>Therapist</Text>
      </TouchableOpacity>
        </ScrollView>
      );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'flex-start',
    padding: 40,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Make the image circular
    paddingTop: 50
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  exhaleText: {
    fontSize: 20,
    fontStyle: 'italic',
    marginTop: 10, // Adjust the spacing as needed
    alignSelf: 'flex-start', // Aligns text to the start of its container
  },
  issuesSection: {
    marginTop: 20,
  },
  issueButton: {
    backgroundColor: '#add8e6',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'flex-start', // Aligns buttons to the start of its container
    marginTop: 10,
  },
  issueButtonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default ProfileScreen;
