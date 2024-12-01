import React, { View } from 'react-native';
import { Header, Footer, News } from './../components';
import { homeStyles } from '../styles';
import { CAROUSEL_1, LOGO, NEWS_1 } from '@/config';


export default function Home() {
  return (
    <>
      <Header />

      {/* <View style={homeStyles.container}></View> */}
      <News text={'SC se mantém como o maior produtor de ostras, vieiras e mexilhões no país'} image={NEWS_1} date={'30 de novembro de 2024'} />
      <News text={'Laboratório de Maricultura da Univali estuda nova espécie invasora de mexilhão na região'} image={CAROUSEL_1} date={'30 de novembro de 2024'} />
      <Footer />
    </>
  );
}
