import React, { View } from 'react-native';
import { Header, Footer } from './../components';
import { homeStyles } from '../styles';

export default function Home() {
  return (
    <>
      <Header />

      <View style={homeStyles.container}></View>

      <Footer />
    </>
  );
}
