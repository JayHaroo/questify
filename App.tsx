import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Landing from './components/landing';
import './global.css';

export default function App() {
  return (
    <View className='flex-1'>
      <Landing />
      <StatusBar style='light' />
    </View>
  );
}