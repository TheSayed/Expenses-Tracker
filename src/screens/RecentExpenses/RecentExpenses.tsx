import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ExpensesOutPut from "../../components/ExpensesOutPut/ExpensesOutPut";
import color from "../../constants/colors";
import { useAppSelector } from "../../redux/hooks";
import { selectExpenses } from "../../redux/expenseSlice";
import { getDateMinusDays } from "../../helpers/date";
const RecentExpenses = () => {
  const expenses = useAppSelector(selectExpenses);
  const recentExpenses = expenses.filter((expense) => {
    const currentDate = new Date();
    const date7DaysAgo = getDateMinusDays(currentDate, 7);
    return expense.date >= date7DaysAgo;
  });
  return (
    <View style={styles.container}>
      <ExpensesOutPut
        expenses={recentExpenses}
        periodName="Total"
        fallbackText="No Expenses Registered in the last 7 days"
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

export default RecentExpenses;
