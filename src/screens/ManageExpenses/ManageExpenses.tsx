import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { RootStackParamList } from "../../navigation/RootNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AppButton from "../../UI/AppButton";
import color from "../../constants/colors";
import { useAppDispatch } from "../../redux/hooks";
import {
  addExpense,
  deleteExpense,
  updateExpense,
} from "../../redux/expenseSlice";
import ExpensesForm from "./ExpensesForm";
import { Expense, ExpenseItem } from "../../data/DUMMY_EXPENSES";
type ManageExpensesProps = NativeStackScreenProps<
  RootStackParamList,
  "ManageExpenses"
>;
const ManageExpenses = ({ route, navigation }: ManageExpensesProps) => {
  const expensesId = route?.params?.expensesId;
  const dispatch = useAppDispatch();
  const isEditing = !!expensesId;

  const deleteExpenseHandler = () => {
    if (expensesId) {
      dispatch(deleteExpense({ id: expensesId }));
    }
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = (expenseData: Expense) => {
    if (isEditing) {
      if (typeof expensesId === "string") {
        dispatch(
          updateExpense({
            id: expensesId,
            changes: expenseData as Partial<ExpenseItem>,
          })
        );
      }
    } else {
      dispatch(addExpense(expenseData as ExpenseItem));
    }
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: isEditing ? "Edit Expenses" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View style={styles.container}>
      <ExpensesForm
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <TouchableOpacity onPress={deleteExpenseHandler}>
            <FontAwesome6 name="trash" size={36} color="red" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: color.primaryBackground,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: color.warningColor,
    alignItems: "center",
  },
});
