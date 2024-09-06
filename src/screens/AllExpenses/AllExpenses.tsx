import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ExpensesOutPut from "../../components/ExpensesOutPut/ExpensesOutPut";
import color from "../../constants/colors";

const AllExpenses = () => {
  return (
    <View style={styles.container}>
      <ExpensesOutPut periodName="Total" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryBackground, // Matches the app's background
  },
});

export default AllExpenses;
