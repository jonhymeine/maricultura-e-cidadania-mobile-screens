import { StyleSheet } from "react-native";
import { Theme } from "../global";

export const socialButtonStyles = StyleSheet.create({
  container: {
    flexDirection: "row",

    width: "100%",
    height: 64,

    justifyContent: "flex-start",
    alignItems: "center",

    padding: 8,
    gap: 12,

    backgroundColor: Theme.colors.primary,
    borderRadius: 8,
  },

  titleWrapper: {
    flex: 1,
  },

  title: {
    textAlign: "center",

    fontSize: 20,
    fontFamily: Theme.fonts.regular,

    color: Theme.colors.text,
  },
});
