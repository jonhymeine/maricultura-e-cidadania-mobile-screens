import { StyleSheet, Dimensions } from 'react-native';
import { Theme } from '../global';

export const carouselStyles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height * 0.3 - 8,
  },

  content: {
    flex: 1,

    position: 'relative',
  },

  carousel: {
    backgroundColor: Theme.colors.primary,
  },

  itemContainer: {
    position: 'relative',

    flex: 1,

    overflow: 'hidden',
  },

  itemImage: {
    width: '100%',
    height: '100%',
  },

  itemContent: {
    position: 'absolute',

    width: '100%',
    bottom: 0,

    padding: 8,
    paddingBottom: 20,

    gap: 4,

    backgroundColor: Theme.colors.carousel.overlay,
  },

  itemTextPeriod: {
    fontSize: 16,
    fontFamily: Theme.fonts.regular,

    textAlign: 'right',

    color: Theme.colors.background,
  },

  itemTextDescription: {
    fontSize: 16,
    fontFamily: Theme.fonts.regular,

    textAlign: 'center',

    color: Theme.colors.background,
  },

  paginationContainer: {
    position: 'absolute',

    flexDirection: 'row',

    bottom: 0,

    width: '100%',

    justifyContent: 'center',
    alignContent: 'center',

    gap: 4,
  },
});
