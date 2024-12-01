// ExpensesOutPut.tsx
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import styles from "./ExpensesOutPut.styles";
import ExpensesList from "./ExpensesList/ExpensesList";
import { Expense } from "../../types/types.dto.";
import ExpenseSummary from "./ExpensesSummary/ExpensesSummary";

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
      <ExpenseSummary expenses={expenses} periodName={periodName} />
      {content}
    </View>
  );
};

export default ExpensesOutPut;
