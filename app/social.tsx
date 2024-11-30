import { SocialButton } from '@/components';
import { socialStyles, Theme } from '@/styles';
import { Text, View } from 'react-native';

export default function Social() {
  return (
    <View style={socialStyles.container}>
      <View style={socialStyles.content}>
        <Text style={socialStyles.title}>Nossas Redes</Text>

        <SocialButton title='@gibamanzoni' icon='instagram' />

        <SocialButton title='@maricultura.univali' icon='instagram' />

        <SocialButton title='@univali_penha' icon='instagram' />
      </View>

      <View style={socialStyles.content}>
        <Text style={socialStyles.title}>E-mails</Text>

        <SocialButton title='manzoni@univali.br' icon='email' />
      </View>
    </View>
  );
}
