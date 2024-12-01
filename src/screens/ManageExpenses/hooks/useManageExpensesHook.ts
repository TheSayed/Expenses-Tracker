import { useLayoutEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  addExpense,
  deleteExpense,
  selectExpenses,
  updateExpense,
} from "../../../redux/expenseSlice";
import { ExpenseItem } from "../../../types/types.dto.";
import {
  useCreateExpenseItemMutation,
  useUpdateExpenseItemMutation,
  useDeleteExpenseItemMutation,
} from "../../../redux/ApiSlice";

const useManageExpensesHook = (route: any, navigation: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [deleteExpenseItems] = useDeleteExpenseItemMutation();
  const expensesId = route?.params?.expensesId;
  const dispatch = useAppDispatch();
  const isEditing = !!expensesId;
  const expenses = useAppSelector(selectExpenses);
  const [createExpense] = useCreateExpenseItemMutation();
  const [updateExpenseItem] = useUpdateExpenseItemMutation();
  const chosenExpenses = expenses.find((item) => item.id === expensesId);

  const deleteExpenseHandler = async () => {
    if (expensesId) {
      setIsLoading(true);
      try {
        dispatch(deleteExpense({ id: expensesId }));
        if (chosenExpenses) {
          await deleteExpenseItems({
            id: expensesId,
            data: chosenExpenses,
          }).unwrap();
        } else {
          throw new Error("Chosen expense not found");
        }
      } catch (error) {
        console.error("Error deleting expense:", error);
      } finally {
        setIsLoading(false);
      }
    }
    navigation.goBack();
  };

  const confirmHandler = async (expenseData: Partial<ExpenseItem>) => {
    setIsLoading(true);
    try {
      const sanitizeDate = (date: string | Date | undefined): string => {
        if (date instanceof Date) {
          return date.toISOString();
        }
        if (typeof date === "string") {
          return new Date(date).toISOString();
        }
        return new Date().toISOString(); // Fallback to current date
      };

      if (isEditing) {
        if (expensesId) {
          dispatch(
            updateExpense({
              id: expensesId,
              changes: {
                ...expenseData,
                date: sanitizeDate(expenseData.date),
              },
            })
          );
        }
        await updateExpenseItem({
          id: expensesId,
          data: {
            ...expenseData,
            date: sanitizeDate(expenseData.date),
          },
        }).unwrap();
      } else {
        const createdExpense = await createExpense({
          description: expenseData.description!,
          amount: expenseData.amount!,
          date: sanitizeDate(expenseData.date),
        }).unwrap();

        dispatch(
          addExpense({
            id: createdExpense?.name!,
            description: expenseData.description!,
            amount: expenseData.amount!,
            date: sanitizeDate(expenseData.date),
          })
        );
      }
    } catch (error) {
      console.error("Error handling expense:", error);
    } finally {
      setIsLoading(false);
    }
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: isEditing ? "Edit Expenses" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return {
    isEditing,
    chosenExpenses,
    deleteExpenseHandler,
    cancelHandler,
    confirmHandler,
    isLoading,
  };
};

export default useManageExpensesHook;
