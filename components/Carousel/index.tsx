import { memo, useRef, useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import ReanimatedCarousel, {
  ICarouselInstance,
} from 'react-native-reanimated-carousel';
import { carouselStyles } from './../../styles';
import { CAROUSEL } from './../../mocks';
import Dot from '../Dot';

function Carousel() {
  const { width, height } = useWindowDimensions();

  const [currentSnapIndex, setCurrentSnapIndex] = useState<number>(0);

  const carouselRef = useRef<ICarouselInstance>(null);

  function onPagination(index: number): void {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        index,
        animated: true,
      });
    }
  }

  return (
    <View style={carouselStyles.container}>
      <View style={carouselStyles.content}>
        <ReanimatedCarousel
          ref={carouselRef}
          data={CAROUSEL}
          width={width}
          height={height * 0.3}
          defaultIndex={0}
          style={carouselStyles.carousel}
          autoPlayInterval={5000}
          autoPlay
          loop
          onSnapToItem={index => setCurrentSnapIndex(index)}
          renderItem={({ item }) => (
            <View style={carouselStyles.itemContainer}>
              <Image
                source={item.image as ImageSourcePropType}
                style={carouselStyles.itemImage}
                resizeMode='cover'
              />

              <View style={carouselStyles.itemContent}>
                <Text style={carouselStyles.itemTextPeriod}>{item.period}</Text>

                <Text style={carouselStyles.itemTextDescription}>
                  {item.description}
                </Text>
              </View>
            </View>
          )}
        />

        <View style={carouselStyles.paginationContainer}>
          {CAROUSEL.map((item, index) => (
            <Dot
              key={item.id}
              isActive={currentSnapIndex === index}
              onPress={() => onPagination(index)}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

export default memo(Carousel);
