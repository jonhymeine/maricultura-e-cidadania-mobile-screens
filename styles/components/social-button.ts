import { StyleSheet } from 'react-native';
import { Theme } from '../global';

export const socialButtonStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    width: '100%',
    height: 64,

    justifyContent: 'center',
    alignItems: 'center',

    padding: 8,
    gap: 32,

    backgroundColor: Theme.colors.primary,
    borderRadius: 8,
  },

  title: {
    fontSize: 20,
    fontFamily: Theme.fonts.regular,

    color: Theme.colors.text,
  },
});
