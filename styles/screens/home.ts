import { StyleSheet } from 'react-native';
import { Theme } from '../global/theme';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,

    gap: 24,
  },

  content: {
    flex: 1,

    padding: 16,

    gap: 24,
  },

  text: {
    fontSize: 24,
    fontFamily: Theme.fonts.regular,

    lineHeight: 32,

    color: Theme.colors.black,
  },
});
