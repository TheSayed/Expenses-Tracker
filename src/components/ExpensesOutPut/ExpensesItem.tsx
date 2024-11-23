import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import color from "../../constants/colors";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/RootNavigator";
// Adjust the path as needed

type ExpensesItemProp = {
  description?: string;
  amount?: number;
  date?: any;
  id: string;
};

const ExpensesItem = ({ description, amount, date, id }: ExpensesItemProp) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleNavigationToExpensesManagement = () => {
    navigation.navigate("ManageExpenses", { expensesId: id });
  };
  return (
    <TouchableOpacity onPress={handleNavigationToExpensesManagement}>
      <View style={styles.container}>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.date}>{date?.toDateString()}</Text>
          <Text style={styles.amount}>${amount?.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ExpensesItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.cardBackground, // White background
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: color.warningColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 2, // Shadow for Android
  },
  description: {
    fontSize: 16,
    color: color.primaryFontColor, // Dark gray color
    marginBottom: 8,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: color.accent4, // Vivid blue color
  },
  date: {
    fontSize: 14,
    color: color.mutedFontColor, // Light gray color
  },
});
