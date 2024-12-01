import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 4,
  },
  label: {
    fontSize: 16,
    color: "#FFFF00",
    fontWeight: "bold",
    marginHorizontal: 6,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.interactiveText,
  },
  multiLine: {
    textAlignVertical: "top",
    height: 100,
  },
});

export default styles;
