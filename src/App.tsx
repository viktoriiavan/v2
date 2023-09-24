import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, FlatList } from "react-native";
import AchievementCard from "./components/AchievementCard";
import InlineImage from "./components/InlineImage";

type AchievementsData = {
  id: string;
  title: string;
  details: string;
  image: any;
  color: string;
};

const icons = {
  sun: require(`./assets/images/sun.png`),
  weight: require(`./assets/images/weight.png`),
};

export default function App() {
  const [achievements, setAchievements] = useState<AchievementsData[]>([
    {
      id: "1",
      title: "Streak and Logbook",
      details: "109 DAYS",
      image: require(`./assets/images/achievement-1.png`),
      color: "#EEB7B7",
    },
    {
      id: "2",
      title: "Achievements And Photobook",
      details: "30 OF 144",
      image: require(`./assets/images/achievement-2.png`),
      color: "#B7E4EE",
    },
    {
      id: "3",
      title: "Leaderboard And Friends",
      details: "#3 VS FRIENDS",
      image: require(`./assets/images/achievement-3.png`),
      color: "#EEB7E5",
    },
  ]);

  const section = ([icon, title, details]: string[]) => {
    return (
      <View style={styles.section}>
        <InlineImage source={icons[icon]} style={styles.icon} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.details}>{details}</Text>
        </View>
      </View>
    );
  };

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
      {section(["sun", "Monday, Sept 16th", "Welcome Back"])}
      <View style={styles.list}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={achievements}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.text} />
      {section(["weight", "Select Your Workout", "Ready, Set, Go"])}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 24,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 20,
    aspectRatio: 1,
  },
  title: {
    fontWeight: "300",
    fontSize: 24,
    color: "white",
  },
  details: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
  list: {
    position: "relative",
    left: -24,
    width: "114%",
    height: 212,
    marginVertical: 8,
    paddingHorizontal: 8,
  },
  text: {
    width: "100%",
    height: 48,
    color: "white",
  },
});
