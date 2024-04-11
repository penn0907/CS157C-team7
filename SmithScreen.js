import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  // Dummy data for mental health issues
  const issues = ['Anxiety', 'Depression', 'Stress'];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
        <Image 
          source={{ uri: '/Users/pranavichaturvedula/Desktop/Mental_Health_Care/assets/Therapist.jpg' }} // Replace with your image URI
          style={styles.profileImage}
        />
        <View style={{ justifyContent: 'center', marginLeft: 10 }}>
          <Text style={styles.name}>Dr Smith</Text>
        </View>
      </View>
      <Text style={styles.paragraph}>Personal Life

Professionally, Dr. Carter specializes in Cognitive Behavioral Therapy (CBT) with a focus on anxiety disorders and stress management. Over her 15 years of practice, she has developed a keen interest in mindfulness and its application in therapeutic settings. Emily is particularly drawn to how mindfulness practices can enhance cognitive restructuring and emotional regulation, providing her clients with the tools to navigate life's challenges more effectively.

Emily's journey into the world of therapy was inspired by her own experiences with anxiety during her college years. It was through her own healing process that she discovered the transformative power of therapy. This personal journey ignited a deep-rooted passion for mental health and a desire to empower others to find their path to well-being.

</Text>
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
      <View>
      <TouchableOpacity 
            style={styles.issueButton}
            onPress={() => navigation.navigate('VoiceRecorder')}
          >
            <Text style={styles.issueButtonText}>Call</Text>
          </TouchableOpacity>
      </View>

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
