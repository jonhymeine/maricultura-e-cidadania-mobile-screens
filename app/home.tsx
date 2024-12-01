import React, { View } from 'react-native';
import { Header, Footer, Carousel } from './../components';
import { homeStyles } from '../styles';

export default function Home() {
  return (
    <>
      <Header />

      <View style={homeStyles.container}>
        <Carousel />
      </View>

      <Footer />
    </>
  );
}
