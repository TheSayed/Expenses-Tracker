import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ExpensesData } from "../../data/DUMMY_EXPENSES";

type ExpenseSummaryProps = {
  expenses: ExpensesData;
  periodName: string;
};

const ExpenseSummary: React.FC<ExpenseSummaryProps> = ({
  expenses,
  periodName,
}) => {
  const calculateTotal = (expenses: ExpensesData): number => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  const totalExpenses = calculateTotal(expenses);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${totalExpenses.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2f95dc",
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2f95dc",
  },
});

export default ExpenseSummary;
