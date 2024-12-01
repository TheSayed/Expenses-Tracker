import { selectExpenses } from "../../redux/expenseSlice";
import { useAppSelector } from "../../redux/hooks";

const useAllExpensesHook = () => {
  const expenses = useAppSelector(selectExpenses);

  const sortedExpenses = [...expenses].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return {
    sortedExpenses,
  };
};

export default useAllExpensesHook;
