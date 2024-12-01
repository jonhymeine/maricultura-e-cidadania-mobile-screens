import React, { memo } from 'react';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';
import { LOGO } from '../../config';
import { headerStyles } from '../../styles';
import Icon from '../Icon';

function Header() {
  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.presentation}>
        <Link href={'/home'} asChild>
          <TouchableOpacity activeOpacity={0.8}>
            <Image source={LOGO as ImageSourcePropType} style={headerStyles.image} />
          </TouchableOpacity>
        </Link>

        <Text style={headerStyles.text}>Maricultura e Cidadania</Text>
      </View>

      <Link href={'/social'} asChild>
        <TouchableOpacity activeOpacity={0.8}>
          <Icon variant='list' color='dark-blue' size='large' />
        </TouchableOpacity>
      </Link>
    </View>
  );
}

export default memo(Header);
