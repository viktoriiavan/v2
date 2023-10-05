import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';

const screens = [
  {
    image: require('../assets/images/onboarding-screen-1.png'),
    title: 'Project Simply',
    description: `By Xatalyst Labs`,
  },
  {
    image: require('../assets/images/onboarding-screen-2.png'),
    title: 'Real-time Feedback',
    description: `Our algorithms will catch the smallest mistakes your coach misses and correct them before they become habits.`,
  },
  {
    image: require('../assets/images/onboarding-screen-3.png'),
    title: 'Powered By AI',
    description: `Using the same formulas which guide spaceships, our algorithms will
    catch the smallest mistakes your coach misses and correct them
    before they become habits.`,
  },
  {
    image: require('../assets/images/onboarding-screen-4.png'),
    title: 'Have Fun',
    description: `Invite your friends, compete together, earn achievements, and have fun while staying healthy.`,
  },
];

export default function HomeScreen() {
  // change currentScreen to 0, 1, 2, 3 to see the different screens
  const [currentScreen, setCurrentScreen] = useState(0);

  const isFirstScreen = currentScreen <= 0;
  const isLastScreen = currentScreen < screens.length - 1;

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}
      >
        <Image source={screens[currentScreen].image} style={styles.image} />
        <View style={{ width: '70%' }}>
          <Text
            style={[
              styles.text,
              styles.titleText,
              isFirstScreen ? { fontSize: 40 } : { fontSize: 24 },
            ]}
          >
            {screens[currentScreen].title}
          </Text>
          <Text style={[styles.text, styles.bodyText]}>
            {screens[currentScreen].description}
          </Text>
          <Text
            style={[
              styles.text,
              styles.ctaText,
              isLastScreen ? { opacity: 0.25 } : { opacity: 1 },
            ]}
          >
            {isLastScreen
              ? 'Tap Anywhere To Continue'
              : 'Tap Anywhere To Get Started'}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 15,
  },
  titleText: {
    fontWeight: '600',
  },
  bodyText: {
    fontSize: 16,
    fontWeight: '300',
    marginHorizontal: 32,
    opacity: 0.75,
  },
  ctaText: {
    fontSize: 16,
    fontWeight: '300',
    marginVertical: 55,
  },
});
