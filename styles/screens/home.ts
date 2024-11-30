import { StyleSheet } from "react-native"
import { Theme } from "../Theme"

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  text: {
    fontSize: 16,
    fontFamily: Theme.fonts.bold,
    color: Theme.colors.text
  }
})