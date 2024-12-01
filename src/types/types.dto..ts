// types.ts
export interface Expense {
  id: string | number;
  description: string;
  amount: number;
  date: string;
}

export interface ExpenseItem {
  id: string;
  description: string;
  amount: number;
  date: string;
}

export type ExpensesData = Expense[];
