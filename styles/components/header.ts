import { StyleSheet } from "react-native";
import { Theme } from "../Theme";

export const headerStyles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: 44,
    paddingHorizontal: 10,
    backgroundColor: Theme.colors.primary,
    borderBottomColor: Theme.colors.black,
    borderBottomWidth: 1,
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
