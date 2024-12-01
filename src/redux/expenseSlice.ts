import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import moment from "moment";
import { createSelector } from "reselect";

type ExpenseItem = {
  id: string;
  description: string;
  amount: number;
  date: string;
};

type ExpenseState = {
  expenses: ExpenseItem[];
};

// Define the initial state using that type
const initialState: ExpenseState = {
  expenses: [],
};

// Utility function to convert date to ISO string
const toISOString = (date: string | Date): string => {
  if (typeof date === "string") {
    return new Date(date).toISOString();
  }
  return date.toISOString();
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (
      state,
      action: PayloadAction<{
        id?: string;
        description: string;
        amount: number;
        date: string | Date;
      }>
    ) => {
      const newExpenseItem: ExpenseItem = {
        id: action.payload.id || nanoid(), // Use provided ID or generate new one
        description: action.payload.description,
        amount: action.payload.amount,
        date: toISOString(action.payload.date),
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
      action: PayloadAction<{
        id: string;
        changes: Partial<Omit<ExpenseItem, "id">>;
      }>
    ) => {
      const idx = state.expenses.findIndex(
        (item) => item.id === action.payload.id
      );
      if (idx !== -1) {
        const updatedChanges = action.payload.changes.date
          ? {
              ...action.payload.changes,
              date: toISOString(action.payload.changes.date),
            }
          : action.payload.changes;

        state.expenses[idx] = {
          ...state.expenses[idx],
          ...updatedChanges,
        };
      }
    },
    setExpenses: (state, action: PayloadAction<ExpenseItem[]>) => {
      state.expenses = action.payload.map((expense) => ({
        ...expense,
        date: toISOString(expense.date),
      }));
    },
  },
});

export const { addExpense, deleteExpense, updateExpense, setExpenses } =
  expenseSlice.actions;

const selectExpenseState = (state: RootState) => state.expense.expenses;

export const selectExpenses = createSelector([selectExpenseState], (expenses) =>
  expenses
    .slice()
    .sort((a, b) => moment(b.date).valueOf() - moment(a.date).valueOf())
);

export const selectExpenseById = (state: RootState, id: string) =>
  state.expense.expenses.find((expense) => expense.id === id);

export const selectTotalExpenses = (state: RootState) =>
  state.expense.expenses.reduce((total, expense) => total + expense.amount, 0);

export default expenseSlice.reducer;
