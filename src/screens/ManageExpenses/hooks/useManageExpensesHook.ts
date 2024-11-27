import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  addExpense,
  deleteExpense,
  selectExpenses,
  updateExpense,
} from "../../../redux/expenseSlice";
import { ExpenseItem } from "../../../data/DUMMY_EXPENSES";

const useManageExpensesHook = (route: any, navigation: any) => {
  const expensesId = route?.params?.expensesId;
  const dispatch = useAppDispatch();
  const isEditing = !!expensesId;
  const expenses = useAppSelector(selectExpenses);

  const choosenExpenses = expenses.find((item) => item.id === expensesId);

  const deleteExpenseHandler = () => {
    if (expensesId) {
      dispatch(deleteExpense({ id: expensesId }));
    }
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = (expenseData: Partial<ExpenseItem>) => {
    if (isEditing) {
      if (typeof expensesId === "string") {
        dispatch(updateExpense({ id: expensesId, changes: expenseData }));
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

  return {
    isEditing,
    choosenExpenses,
    deleteExpenseHandler,
    cancelHandler,
    confirmHandler,
  };
};

export default useManageExpensesHook;
