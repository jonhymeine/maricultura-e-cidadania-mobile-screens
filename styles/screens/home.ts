import { StyleSheet } from 'react-native';
import { Theme } from '../global/theme';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    fontSize: 16,
    fontFamily: Theme.fonts.bold,
    color: Theme.colors.text,
  },
});
