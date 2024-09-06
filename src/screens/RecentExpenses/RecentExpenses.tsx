import { View, Text } from "react-native";
import React from "react";
import ExpensesOutPut from "../../components/ExpensesOutPut/ExpensesOutPut";

const RecentExpenses = () => {
  return (
    <View>
      <ExpensesOutPut periodName="Last 7 Days" />
    </View>
  );
};

export default RecentExpenses;
