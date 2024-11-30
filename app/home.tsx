import React, { Text, View } from 'react-native';
import { homeStyles } from '../styles';

export default function Home() {
  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.text}>Home</Text>
    </View>
  );
}
