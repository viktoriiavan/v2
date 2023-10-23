import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
} from 'react-native';
import SectionA from '../components/sections/SectionA';

const images = {
  exercise: require('../assets/images/exercise.png'),
  controlBackward: require('../assets/images/control-backward.png'),
  controlPause: require('../assets/images/control-pause.png'),
  controlForward: require('../assets/images/control-forward.png'),
};

export default function WorkoutScreen() {
  const [isMLMode, setMLMode] = useState(false);
  const toggleSwitch = () => setMLMode((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: '100%' }}>
        <SectionA />
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Exercise 1 of 14</Text>
        <Text style={[styles.text, styles.textHero]}>Stretches</Text>
      </View>
      <View style={styles.imageWrapper}>
        <Image source={images.exercise} style={styles.image} />
      </View>
      <View style={styles.controlsWrapper}>
        <View style={{ flex: 1, justifyContent: 'center' }} />
        {/* ToggleButton */}
        <View style={styles.toggleButtonContainer}>
          <Text style={styles.text}>3D Couch</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#767577' }}
            thumbColor={isMLMode ? '#fff' : '#fff'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isMLMode}
          />
          <Text style={styles.text}>ML Couch</Text>
        </View>
        {/* ActionButtons */}
        <View style={styles.actionButtonContainer}>
          <Image
            style={styles.controlActionButton}
            source={images.controlBackward}
          />
          <Image
            style={styles.controlActionButton}
            source={images.controlPause}
          />
          <Image
            style={styles.controlActionButton}
            source={images.controlForward}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090909',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapper: {
    paddingHorizontal: 24,
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  textHero: {
    fontSize: 50,
    fontWeight: '700',
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    aspectRatio: 1,
  },
  image: {
    width: '150%',
    height: '100%',
    left: '-50%',
    transform: [{ translateX: 100 }],
    resizeMode: 'contain',
    position: 'absolute',
  },
  controlsWrapper: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    padding: 36,
  },
  actionButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 48,
  },
  controlActionButton: {
    width: 36,
    aspectRatio: 1,
  },
  toggleButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
