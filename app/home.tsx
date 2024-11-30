import React, { Text, View } from 'react-native';
import { Header, Footer } from './../components';
import { homeStyles } from '../styles';

export default function Home() {
  return (
    <View style={homeStyles.container}>
      <Header />

      <View style={homeStyles.content} />

      <Footer />
    </View>
  );
}
