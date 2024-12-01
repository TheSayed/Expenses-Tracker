import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import moment from "moment";

type ExpenseItem = {
  id: string;
  description: string;
  amount: number;
  date: Date;
};

type ExpenseState = {
  expenses: ExpenseItem[];
};

// Define the initial state using that type
const initialState: ExpenseState = {
  expenses: [],
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (
      state,
      action: PayloadAction<{
        description: string;
        amount: number;
        date: Date;
      }>
    ) => {
      const newExpenseItem: ExpenseItem = {
        id: nanoid(),
        ...action.payload,
      };
      state.expenses.push(newExpenseItem);
    },
    deleteExpense: (state, action: PayloadAction<{ id: string }>) => {
      const idx = state.expenses.findIndex(
        (item) => item.id === action.payload.id
      );
      if (idx !== -1) {
        state.expenses.splice(idx, 1);
      }
    },
    updateExpense: (
      state,
      action: PayloadAction<{ id: string; changes: Partial<ExpenseItem> }>
    ) => {
      const idx = state.expenses.findIndex(
        (item) => item.id === action.payload.id
      );
      if (idx !== -1) {
        state.expenses[idx] = {
          ...state.expenses[idx],
          ...action.payload.changes,
        };
      }
    },
    setExpenses: (state, action: PayloadAction<ExpenseItem[]>) => {
      state.expenses = action.payload;
    },
  },
});

export const { addExpense, deleteExpense, updateExpense, setExpenses } =
  expenseSlice.actions;

export const selectExpenses = (state: RootState) =>
  state.expense.expenses
    .slice()
    .sort((a, b) => moment(b.date).valueOf() - moment(a.date).valueOf());
export const selectExpenseById = (state: RootState, id: string) =>
  state.expense.expenses.find((expense) => expense.id === id);

export const selectTotalExpenses = (state: RootState) =>
  state.expense.expenses.reduce((total, expense) => total + expense.amount, 0);

export default expenseSlice.reducer;
