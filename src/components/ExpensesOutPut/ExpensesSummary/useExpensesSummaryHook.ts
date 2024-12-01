import { Expense, ExpensesData } from "../../../types/types.dto.";

const useExpensesSummaryHook = ({ expenses }: { expenses: Expense[] }) => {
  const calculateTotal = (expenses: ExpensesData): number => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  const totalExpenses = calculateTotal(expenses);
  return {
    totalExpenses,
  };
};

export default useExpensesSummaryHook;
