import { View, Text, StyleSheet, Image } from 'react-native';

const image = require(`../assets/images/workout.png`);

export default function WorkoutCard() {
  return (
    <View style={styles.card}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>7-Minute Workout W/ ML</Text>
        <Image source={image} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    marginHorizontal: 16,
    borderRadius: 25,
    borderColor: 'rgba(255, 255, 255, .5)',
    borderWidth: 1,
    borderStyle: 'dashed',
    padding: 30,
    aspectRatio: 165 / 62,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    textTransform: 'uppercase',
    width: '40%',
    fontSize: 15,
    fontWeight: '400',
    letterSpacing: 1.5,
  },
  image: {
    marginLeft: 'auto',
    resizeMode: 'contain',
  },
});
