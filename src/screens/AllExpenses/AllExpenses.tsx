import { View } from "react-native";
import React from "react";
import ExpensesOutPut from "../../components/ExpensesOutPut/ExpensesOutPut";
import useAllExpensesHook from "./useAllExpensesHook";
import styles from "./AllExpenses.styles";

const AllExpenses = () => {
  const { sortedExpenses } = useAllExpensesHook();
  return (
    <View style={styles.container}>
      <ExpensesOutPut
        expenses={sortedExpenses}
        periodName="Total"
        fallbackText="No Expenses Registered Found"
      />
    </View>
  );
};

export default AllExpenses;
