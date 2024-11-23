// ExpensesOutPut.tsx
import React from "react";
import { View, StyleSheet, Text } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { Expense } from "../../data/DUMMY_EXPENSES";

interface ExpensesOutPutProp {
  expenses: Expense[];
  periodName: string;
  fallbackText: string;
}

const ExpensesOutPut: React.FC<ExpensesOutPutProp> = ({
  expenses = [],
  periodName,
  fallbackText,
}) => {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={periodName} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  infoText: {
    marginTop: 120,
    justifyContent: "center",
    fontSize: 16,
    textAlign: "center",
    color: "gray",
  },
});

export default ExpensesOutPut;
