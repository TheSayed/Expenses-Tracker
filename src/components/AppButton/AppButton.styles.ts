import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: Colors.successColor,
    minWidth: 120,
    marginHorizontal: 8,
    borderRadius: 8,
    shadowColor: Colors.successColor,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  fade: {
    backgroundColor: Colors.mutedFontColor,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  fadeText: {
    color: "white",
    textAlign: "center",
  },
});

export default styles;
