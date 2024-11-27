import { StyleSheet } from "react-native";
import color from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: color.primaryBackground,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: color.warningColor,
    alignItems: "center",
  },
});

export default styles;
