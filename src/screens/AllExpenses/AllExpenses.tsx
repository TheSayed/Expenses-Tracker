import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ExpensesOutPut from "../../components/ExpensesOutPut/ExpensesOutPut";
import color from "../../constants/colors";
import { useAppSelector } from "../../redux/hooks";
import { selectExpenses } from "../../redux/expenseSlice";

const AllExpenses = () => {
  const expenses = useAppSelector(selectExpenses);

  return (
    <View style={styles.container}>
      <ExpensesOutPut
        expenses={expenses}
        periodName="Total"
        fallbackText="No Expenses Registered Found"
      />
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
