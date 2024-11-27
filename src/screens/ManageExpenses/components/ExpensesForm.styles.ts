import { StyleSheet } from "react-native";

export default StyleSheet.create({
  form: {
    marginTop: 40,
    marginBottom: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  rowForm: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  rowInput: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  errorText: {
    color: "red",
    fontSize: 14,
  },
});
