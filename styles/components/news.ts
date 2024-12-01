import { StyleSheet } from 'react-native';
import { Theme } from '../global';

export const newsStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
    backgroundColor: Theme.colors.primary,
    borderRadius: 20,
    padding: 16,
  },

  textContainer:{
    flex: 1,
    gap: 8,
  },
  text: {
    fontSize: 16,
    fontFamily: Theme.fonts.regular,
    marginBottom: 4,
    color: Theme.colors.text,
    overflow: 'hidden',
  },

  image: {
    width: '40%',
    height: '100%',
    borderRadius: 10,
  },

  date: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Theme.colors.text,
  }
});