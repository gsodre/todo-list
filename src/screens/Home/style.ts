import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    height: 173,
    color: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0D0D0D",
  },
  body: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    backgroundColor: "#1A1A1A",
  },
  input: {
    flex: 1,
    height: 54,
    padding: 16,
    fontSize: 16,
    color: "#FFF",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#0D0D0D",
    backgroundColor: "#262626",
    elevation: 5,
    shadowRadius: 4,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
  },
  button: {
    width: 52,
    height: 52,
    marginLeft: 4,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E6F9F",
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
  },
  form: {
    top: -27,
    flexDirection: "row",
    justifyContent: "center",
  },
  counters: {
    marginTop: 5,
    width: "100%",
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flatList: {
    width: "100%",
  },
  listEmptyComponent: {
    borderTopWidth: 1,
    paddingVertical: 48,
    alignItems: "center",
    paddingHorizontal: 20,
    borderTopColor: "#333333",
  },
  listEmpty: {
    fontSize: 14,
    marginTop: 16,
    color: "#808080",
    textAlign: "center",
  },
});
