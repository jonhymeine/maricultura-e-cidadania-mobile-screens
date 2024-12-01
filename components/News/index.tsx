import React, { memo } from 'react';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';
import { LOGO } from '../../config';
import { newsStyles } from '../../styles';
import { NewsProps } from './types'
import Icon from '../Icon';

function News(props: NewsProps) {


  return (
    <TouchableOpacity activeOpacity={0.8} style={newsStyles.container}>
    <Image resizeMode='cover' style={newsStyles.image} source={props.image as ImageSourcePropType} />
    <View style={newsStyles.textContainer}>
      <Text style={newsStyles.text}>{props.text}</Text>
      <Text style={newsStyles.date}>{props.date}</Text>
    </View>
    </TouchableOpacity>     
  );
}

export default memo(News);