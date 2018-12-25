import { StyleSheet } from "react-native";
import { MainColors } from "../colors/main-colors";

export const MainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MainColors.backgroundColor,
    alignItems: "center",
    justifyContent: "center"
  },
  textInput: {
    margin: 8,
    padding: 8,
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4
  }
});