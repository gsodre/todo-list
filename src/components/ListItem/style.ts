import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 64,
    padding: 16,
    borderRadius: 8,
    marginVertical: 4,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#262626",
  },
  text: {
    fontSize: 14,
    paddingLeft: 16,
    paddingRight: 20,
  },
  deleteButton: {
    borderRadius: 999,
    backgroundColor: "#333333",
  },
  buttonText: {
    width: 17.5,
    height: 17.5,
    borderWidth: 1,
    borderRadius: 9,
    color: "#D9D9D9",
    fontWeight: "bold",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderColor: "#4EA8DE",
  },
});
