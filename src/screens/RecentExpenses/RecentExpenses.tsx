import { View } from "react-native";
import React, { useEffect } from "react";
import ExpensesOutPut from "../../components/ExpensesOutPut/ExpensesOutPut";
import styles from "./RecentExpenses.styles";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setExpenses, selectExpenses } from "../../redux/expenseSlice";
import { getDateMinusDays } from "../../helpers/date";
import { useGetExpenseItemsQuery } from "../../redux/ApiSlice";
import LoadingOutlay from "../../components/LoadingOutLay/LoadingOutlay";

const RecentExpenses = () => {
  const dispatch = useAppDispatch();
  const expenses = useAppSelector(selectExpenses);
  const { data, isLoading } = useGetExpenseItemsQuery();

  useEffect(() => {
    if (data) {
      dispatch(setExpenses(data));
    }
  }, [data, dispatch]);

  const recentExpenses =
    expenses?.filter((expense) => {
      const currentDate = new Date();
      const date7DaysAgo = getDateMinusDays(currentDate.toISOString(), 7);
      return new Date(expense.date) >= date7DaysAgo;
    }) || [];

  return isLoading ? (
    <LoadingOutlay />
  ) : (
    <View style={styles.container}>
      <ExpensesOutPut
        expenses={recentExpenses}
        periodName="Total"
        fallbackText="No Expenses Registered in the last 7 days"
      />
    </View>
  );
};

export default RecentExpenses;
