// types.ts
export interface Expense {
  id: string | number;
  description: string;
  amount: number;
  date: Date;
}

export interface ExpenseItem {
  id: string;
  description: string;
  amount: number;
  date: Date;
}

export type ExpensesData = Expense[];
