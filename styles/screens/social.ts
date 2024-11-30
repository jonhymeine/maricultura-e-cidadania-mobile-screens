import { StyleSheet } from 'react-native';
import { Theme } from '../global';

export const socialStyles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 52,
    gap: 96,

    backgroundColor: Theme.colors.background,
  },

  content: {
    flexDirection: 'column',

    width: '100%',

    gap: 20,
  },

  title: {
    fontSize: 24,
    fontFamily: Theme.fonts.regular,
    lineHeight: 32,

    color: Theme.colors.black,
  },
});
