import React from "react";
import { View, Text } from "react-native";
import { Expense, ExpensesData } from "../../../types/types.dto.";
import styles from "./ExpensesSummary.styles";
import useExpensesSummaryHook from "./useExpensesSummaryHook";
type ExpenseSummaryProps = {
  expenses: Expense[];
  periodName: string;
};

const ExpenseSummary: React.FC<ExpenseSummaryProps> = ({
  expenses,
  periodName,
}) => {
  const { totalExpenses } = useExpensesSummaryHook({ expenses });

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${totalExpenses.toFixed(2)}</Text>
    </View>
  );
};

export default ExpenseSummary;
