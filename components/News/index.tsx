import React, { memo } from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { newsStyles } from '../../styles';
import { NewsProps } from './types';

function News({ date, id, image, text }: NewsProps) {
  return (
    <TouchableOpacity id={id} style={newsStyles.container} activeOpacity={0.8}>
      <Image
        resizeMode='cover'
        style={newsStyles.image}
        source={image as ImageSourcePropType}
      />

      <View style={newsStyles.textContainer}>
        <Text style={newsStyles.text} numberOfLines={4} ellipsizeMode='tail'>
          {text}
        </Text>

        <Text style={newsStyles.date}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default memo(News);
