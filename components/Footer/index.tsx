import React, { memo } from 'react';
import { Alert, Linking, Text, TouchableOpacity, View } from 'react-native';
import { footerStyles } from '../../styles';
import Icon from '../Icon';

function Footer() {
  async function handleCanOpenURL(nickname: string): Promise<boolean> {
    return await Linking.canOpenURL(`https://www.instagram.com/${nickname}`);
  }

  async function handleRedirectToSocialMedia(username: string): Promise<void> {
    const nickname = username.slice(1);
    const canOpenURL = await handleCanOpenURL(nickname);
    if (canOpenURL) {
      await Linking.openURL(`https://www.instagram.com/${nickname}`);
    } else {
      Alert.alert(
        'Aviso!',
        'Não é possível abrir a rede deseja. Tente novamente mais tarde!'
      );
    }
  }

  return (
    <View style={footerStyles.container}>
      <TouchableOpacity
        style={footerStyles.content}
        activeOpacity={0.8}
        onPress={async () =>
          await handleRedirectToSocialMedia('@maricultura.univali')
        }
      >
        <Icon variant='instagram' />

        <Text style={footerStyles.text}>@maricultura.univali</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={footerStyles.content}
        activeOpacity={0.8}
        onPress={async () => await handleRedirectToSocialMedia('@gibamanzoni')}
      >
        <Icon variant='instagram' />

        <Text style={footerStyles.text}>@gibamanzoni</Text>
      </TouchableOpacity>
    </View>
  );
}

export default memo(Footer);
