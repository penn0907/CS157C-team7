import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

// Updated dummy data for therapists including area of specialization
const therapists = {
  virtual: [
    { id: 1, name: 'Dr. Smith', specialization: 'Anxiety' },
    { id: 2, name: 'Dr. Johnson', specialization: 'Depression' },
  ],
  inPerson: [
    { id: 3, name: 'Dr. Williams', specialization: 'Relationships' },
    { id: 4, name: 'Dr. Brown', specialization: 'Stress Management' },
  ],
};

const TherapistScreen = ({ navigation }) => {
  const scheduleAppointment = (therapistName) => {
    console.log(`Scheduling appointment with ${therapistName}`);
    // Add navigation logic here, e.g., navigation.navigate('ScheduleScreen', { therapistName });
  };

  const renderTherapistSection = (sectionTitle, therapists) => (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{sectionTitle}</Text>
      {therapists.map((therapist) => (
        <View key={therapist.id} style={styles.therapistBox}>
          <Text style={styles.therapistName}>{`${therapist.name} (${therapist.specialization})`}</Text>
          <TouchableOpacity
            style={styles.scheduleButton}
            onPress={() => navigation.navigate('SmithScreen')}
          >
            <Text style={styles.scheduleButtonText}>Schedule Appointment</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {renderTherapistSection('Virtual Therapists', therapists.virtual)}
      {renderTherapistSection('In-Person Therapists', therapists.inPerson)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Light grey background for contrast
  },
  sectionContainer: {
    marginTop: 60,
    marginLeft:20,
    marginRight:20
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  therapistBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4, // Android shadow
    alignItems: 'center',
  },
  therapistName: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 8,
    color: '#333',
  },
  scheduleButton: {
    backgroundColor: '#007bff', // Bootstrap primary blue
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginTop: 8,
  },
  scheduleButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default TherapistScreen;
