import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./ExpensesItem.styles";
import ExpensesItemHook from "./ExpensesItemHook";

type ExpensesItemProp = {
  description?: string;
  amount?: number;
  date?: any;
  id: string;
};

const ExpensesItem = ({ description, amount, date, id }: ExpensesItemProp) => {
  const { handleNavigationToExpensesManagement, formattedDate } =
    ExpensesItemHook({ id, date });
  return (
    <TouchableOpacity onPress={handleNavigationToExpensesManagement}>
      <View style={styles.container}>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.date}>{formattedDate}</Text>
          <Text style={styles.amount}>${amount?.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ExpensesItem;
