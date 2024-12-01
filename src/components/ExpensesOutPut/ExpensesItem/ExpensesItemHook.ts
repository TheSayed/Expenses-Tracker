import { View, Text } from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import moment from "moment";
import { RootStackParamList } from "../../../navigation/RootNavigator";

type ExpensesItemProp = {
  date: string;
  id: string;
};

const ExpensesItemHook = ({ id, date }: ExpensesItemProp) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleNavigationToExpensesManagement = () => {
    navigation.navigate("ManageExpenses", { expensesId: id });
  };
  const formattedDate = moment(date).format("YYYY-MM-DD");
  return {
    handleNavigationToExpensesManagement,
    formattedDate,
  };
};

export default ExpensesItemHook;
