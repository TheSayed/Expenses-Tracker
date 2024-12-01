import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { ExpensesData } from "../../../types/types.dto.";
import styles from "./ExpensesList.styles";
import ExpensesItem from "../ExpensesItem/ExpensesItem";

type ExpensesListProp = {
  expenses: ExpensesData;
};
const ExpensesList = ({ expenses }: ExpensesListProp) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <ExpensesItem
              amount={item.amount}
              description={item.description}
              date={item.date}
              id={item.id.toString()}
            />
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ExpensesList;
