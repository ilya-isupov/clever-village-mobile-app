import { StyleSheet } from "react-native";
import { MainColors } from "../colors/main-colors";

export const MainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MainColors.backgroundColor,
    padding: 8
  },
  pageContent: {
    backgroundColor: MainColors.backgroundColor,
    padding: 8
  },
  card: {
    width: "100%"
  },
  textLabel: {
    margin: 8,
    padding: 8,
    fontSize: 13,
    height: 40,
    textAlign: "left"
  },
  textInput: {
    margin: 8,
    padding: 8,
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4
  },
  button: {
    margin: 8,
    width: 200,
    height: 40
  }
});