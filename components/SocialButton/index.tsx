import React, { memo } from 'react';
import { Alert, Linking, Text, TouchableOpacity } from 'react-native';
import Icon from '../Icon';
import { SocialButtonIconVariant, SocialButtonProps } from './types';
import { socialButtonStyles } from '../../styles';

function SocialButton({ title, icon = 'instagram' }: SocialButtonProps) {
  const urls: Record<SocialButtonIconVariant, string> = {
    instagram: `https://www.instagram.com/${title.slice(1)}`,
    email: `mailto:${title}`,
  };

  async function handleCanOpenURL(): Promise<boolean> {
    return await Linking.canOpenURL(urls[icon]);
  }

  async function handleRedirectToSocialMedia(): Promise<void> {
    const canOpenURL = await handleCanOpenURL();
    if (canOpenURL) {
      await Linking.openURL(urls[icon]);
    } else {
      Alert.alert(
        'Aviso!',
        'Não é possível abrir a rede deseja. Tente novamente mais tarde!'
      );
    }
  }

  return (
    <TouchableOpacity
      style={socialButtonStyles.container}
      activeOpacity={0.8}
      onPress={handleRedirectToSocialMedia}
    >
      <Icon variant={icon} size='x-large' />

      <Text style={socialButtonStyles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default memo(SocialButton);
