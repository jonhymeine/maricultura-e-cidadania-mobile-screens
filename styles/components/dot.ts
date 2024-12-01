import { StyleSheet } from 'react-native';
import { Theme } from '../global';

export const dotStyles = StyleSheet.create({
  container: {
    width: 8,
    height: 8,

    borderRadius: 9999,
  },

  active: {
    backgroundColor: Theme.colors.carousel.active,
  },

  inactive: {
    backgroundColor: Theme.colors.carousel.inactive,
  },
});
