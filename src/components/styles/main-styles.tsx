import { StyleSheet } from "react-native";
import { MainColors } from "../colors/main-colors";

export const MainStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  fullWidthcontainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  authContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%"
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
    margin: 8
  },
  fullButton: {
    width: "100%"
  },
  formItem: {
    margin: 8
  }
});