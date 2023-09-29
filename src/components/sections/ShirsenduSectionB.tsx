import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import AchievementCard from '../AchievementCard';

type AchievementsData = {
  id: string;
  title: string;
  details: string;
  image: any;
  color: string;
};

const icons = {
  sun: require(`../../assets/images/sun.png`),
  weight: require(`../../assets/images/weight.png`),
};

// Get the current date
const currentDate = new Date();
const options = {
  weekday: 'long',
  month: 'short',
  day: 'numeric', // Add day option to include the day of the month
};
const formattedDate = formatDate(currentDate, options);

// Function to format the day with a suffix
function formatDate(date, options) {
  const day = date.getDate();
  const suffix = getDaySuffix(day);
  return `${date.toLocaleDateString(undefined, options)}${suffix}`;
}

// Function to get the day suffix
function getDaySuffix(day) {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

const section = ([icon, title, details]: string[]) => {
  return (
    <View style={styles.section}>
      <Image source={icons[icon]} style={styles.icon} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.details}>{details}</Text>
      </View>
    </View>
  );
};

export default function ShirsenduSectionB() {
  const [achievements, setAchievements] = useState<AchievementsData[]>([
    {
      id: '1',
      title: 'Streak and Logbook',
      details: '109 DAYS',
      image: require(`../../assets/images/achievement-1.png`),
      color: '#EEB7B7',
    },
    {
      id: '2',
      title: 'Achievements And Photobook',
      details: '30 OF 144',
      image: require(`../../assets/images/achievement-2.png`),
      color: '#B7E4EE',
    },
    {
      id: '3',
      title: 'Leaderboard And Friends',
      details: '#3 VS FRIENDS',
      image: require(`../../assets/images/achievement-3.png`),
      color: '#EEB7E5',
    },
  ]);

  const renderItem = ({ item }: { item: AchievementsData }) => {
    const { title, details, image, color } = item;
    return (
      <AchievementCard
        title={title}
        details={details}
        image={image}
        color={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text} />
      {section(['sun', formattedDate, 'Welcome Back'])}
      <View style={styles.list}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={achievements}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 24,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16, // Add margin at the bottom for spacing
  },
  icon: {
    width: 40, // Adjust the width to your desired size with padding
    height: 40, // Set the same height as width to maintain aspect ratio
    marginRight: 16, // Add right margin for spacing
    marginLeft: 16,
  },
  title: {
    fontWeight: '300',
    fontSize: 24,
    color: 'white',
  },
  details: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
  list: {
    position: 'relative',
    left: -24,
    width: '114%',
    height: 212,
    marginVertical: 8,
    paddingHorizontal: 8,
  },
  text: {
    width: '100%',
    height: 48,
    color: 'white',
  },
});

export { section };
