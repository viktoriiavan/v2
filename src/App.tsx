import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from './screens/OnboardingScreen';
import HomeScreen from './screens/HomeScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import CustomDrawer from './components/nav/CustomDrawer';
import NotFoundScreen from './screens/NotFoundScreen';
import TabOneScreen from './screens/TabOneScreen';
import TabTwoScreen from './screens/TabTwoScreen';
import ML from './screens/ML';
import ModalScreen from './screens/ModalScreen';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{headerShown:false,drawerActiveTintColor:"gray"}}
       initialRouteName='Workout'>
        <Drawer.Screen name="Workout" component={WorkoutScreen} />
        <Drawer.Screen name="Onboarding" component={OnboardingScreen} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="NotFound" component={NotFoundScreen} />
        <Drawer.Screen name="TabOne" component={TabOneScreen} />
        <Drawer.Screen name="TabTwo" component={TabTwoScreen} />
        <Drawer.Screen name="ModalScreen" component={ModalScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

/*
      <Stack.Navigator initialRouteName="Workout">
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Workout"
          component={WorkoutScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

         <Drawer.Navigator>
        <Drawer.Screen name="Workout" component={WorkoutScreen} />
      </Drawer.Navigator>
      */