import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import DUMMY_EXPENSES from "../../data/DUMMY_EXPENSES";
import color from "../../constants/colors";

type ExpensesOutPutProp = {
  expenses?: object[];
  periodName: string;
};
const ExpensesOutPut = ({ expenses, periodName }: ExpensesOutPutProp) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={periodName} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutPut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryBackground, // Use a more visible color
  },
});
