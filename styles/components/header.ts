import { StyleSheet } from 'react-native';
import { Theme } from '../global';

export const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    height: 44,

    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: 10,

    backgroundColor: Theme.colors.primary,
    borderBottomColor: Theme.colors.black,
    borderBottomWidth: 1,
  },

  presentation: {
    flexDirection: 'row',

    alignItems: 'center',

    gap: 8,
  },

  text: {
    fontSize: 20,
    fontFamily: Theme.fonts.regular,

    color: Theme.colors.text,
  },

  image: {
    width: 32,
    height: 32,
  },
});
