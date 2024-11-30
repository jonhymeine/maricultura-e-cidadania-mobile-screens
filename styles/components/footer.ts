import { StyleSheet } from 'react-native';
import { Theme } from '../global';

export const footerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    height: 28,

    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: 10,

    backgroundColor: Theme.colors.primary,
    borderTopColor: Theme.colors.black,
    borderTopWidth: 1,
  },

  content: {
    flexDirection: 'row',

    alignItems: 'center',

    gap: 4,
  },

  text: {
    fontSize: 14,
    fontFamily: Theme.fonts.regular,

    color: Theme.colors.text,
  },

  image: {
    width: 32,
    height: 32,
  },
});
