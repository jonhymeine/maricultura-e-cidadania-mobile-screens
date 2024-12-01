import { StyleSheet } from 'react-native';
import { Theme } from '../global';

export const newsStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: 16,
    gap: 12,

    borderRadius: 16,

    backgroundColor: Theme.colors.primary,
  },

  textContainer: {
    flex: 1,

    gap: 8,
  },

  text: {
    fontSize: 16,
    fontFamily: Theme.fonts.regular,
    lineHeight: 20,

    color: Theme.colors.text,
  },

  image: {
    width: '40%',
    height: '100%',

    borderRadius: 12,
  },

  date: {
    fontSize: 16,
    fontFamily: Theme.fonts.bold,
    lineHeight: 20,

    color: Theme.colors.text,
  },
});
