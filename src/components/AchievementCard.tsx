import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AchievementCard({
  title,
  details,
  image,
  color,
}: {
  title: string;
  details: string;
  image: any;
  color: string;
}) {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <View style={styles.details}>
        <Text style={styles.textName}>{title}</Text>
        <Text style={styles.textDetails}>{details}</Text>
      </View>
      <Image source={image} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    margin: 8,
    borderRadius: 25,
    paddingHorizontal: 24,
    paddingVertical: 28,
    width: 330,
    aspectRatio: 22 / 13,
  },
  details: {
    flex: 1,
    justifyContent: 'space-between',
    letterSpacing: 1.5,
  },
  image: {
    opacity: 0.1,
    height: '100%',
  },
  textName: {
    textTransform: 'uppercase',
  },
  textDetails: {
    fontWeight: '500',
  },
});
