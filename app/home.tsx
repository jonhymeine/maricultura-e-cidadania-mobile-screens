import React, { Text, View } from 'react-native';
import { Header, Footer, Carousel } from './../components';
import { homeStyles } from '../styles';

export default function Home() {
  return (
    <>
      <Header />

      <View style={homeStyles.container}>
        <Carousel />

        <View style={homeStyles.content}>
          <Text style={homeStyles.text}>Últimas Notícias</Text>
        </View>
      </View>

      <Footer />
    </>
  );
}
