import 'react-native-reanimated';

import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { rootStyles, Theme } from '@/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar
        backgroundColor={Theme.colors.primary}
        style='dark'
        translucent
        networkActivityIndicatorVisible
      />

      <SafeAreaView style={rootStyles.container}>
        <Stack initialRouteName='home'>
          <Stack.Screen name='home' options={{ headerShown: false }} />

          <Stack.Screen name='social' options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </>
  );
}
