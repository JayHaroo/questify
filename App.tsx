import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Landing from './components/landing';
import Profile from './components/profile';
import './global.css';

export default function App() {
  return (
    <View className='flex-1'>
      {/* <Profile /> */}
      <Landing />
      <StatusBar style='light' />
    </View>
  );
}