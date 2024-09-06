import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { RootStackParamList } from "../../navigation/RootNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
type ManageExpensesProps = NativeStackScreenProps<
  RootStackParamList,
  "ManageExpenses"
>;
const ManageExpenses = ({ route, navigation }: ManageExpensesProps) => {
  const expensesId = route?.params?.expensesId;

  const isEditing = !!expensesId;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: isEditing ? "Edit Expenses" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View>
      <Text>ManageExpenses</Text>
    </View>
  );
};

export default ManageExpenses;
