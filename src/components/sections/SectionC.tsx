import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { section } from './SectionB';
import WorkoutCard from '../WorkoutCard';

export default function SectionC() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text} />
      {section(['weight', 'Select Your Workout', 'Ready, Set, Go'])}
      <View style={styles.workoutCardWrapper}>
        <WorkoutCard />
      </View>
      <View style={styles.ctaButtonWrapper}>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaText}>Begin Workout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    width: '100%',
    height: 48,
    color: 'white',
  },
  workoutCardWrapper: {
    marginTop: 16,
  },
  ctaButtonWrapper: {
    height: 75,
    marginHorizontal: 36,
    marginTop: 24,
  },
  ctaButton: {
    flex: 1,
    justifySelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    paddingVertical: 25,
    backgroundColor: 'white',
  },
  ctaText: {
    fontSize: 18,
  },
});
