import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.cardBackground, // White background
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: Colors.interactiveText,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 2, // Shadow for Android
  },
  description: {
    fontSize: 16,
    color: Colors.primaryFontColor, // Dark gray color
    marginBottom: 8,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.accent4, // Vivid blue color
  },
  date: {
    fontSize: 14,
    color: Colors.mutedFontColor, // Light gray color
  },
});
