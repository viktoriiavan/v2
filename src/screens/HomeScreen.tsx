import SectionB from '../components/sections/SectionB';
import SectionC from '../components/sections/SectionC';
import NavBar from '../components/nav/NavBar';
import { SafeAreaView,View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
export default function HomeScreen() {
  return (
    <>
      <StatusBar style='light'/>
      <SectionB />
      <SectionC />
    </>
  );
}
