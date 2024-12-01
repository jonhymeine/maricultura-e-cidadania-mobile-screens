import { useCallback } from 'react';
import React, { FlatList, Text, View } from 'react-native';
import { Header, Footer, Carousel, News } from './../components';
import { NewsProps } from '@/components/News/types';
import { homeStyles } from '../styles';
import { NEWS } from '../mocks';

export default function Home() {
  const renderItem = useCallback((news: NewsProps) => <News {...news} />, []);

  const keyExtractor = useCallback((news: NewsProps) => news.id, []);

  return (
    <>
      <Header />

      <View style={homeStyles.container}>
        <Carousel />

        <View style={homeStyles.content}>
          <Text style={homeStyles.text}>Últimas Notícias</Text>

          <FlatList
            data={NEWS}
            contentContainerStyle={homeStyles.list}
            renderItem={({ item }) => renderItem(item)}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>

      <Footer />
    </>
  );
}
