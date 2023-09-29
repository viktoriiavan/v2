import { SafeAreaView, View, StyleSheet } from 'react-native';
import { section } from './ShirsenduSectionB';
import WorkoutCard from '../WorkoutCard';

export default function SectionC() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text} />
      {section(['weight', 'Select Your Workout', 'Ready, Set, Go'])}
      <View style={styles.workoutCardWrapper}>
        <WorkoutCard />
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
    marginTop: 45,
  },
});
