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

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Groceries",
    amount: 45.67,
    date: new Date("2024-11-15"),
  },
  {
    id: "e2",
    description: "Movie Tickets",
    amount: 24.99,
    date: new Date("2024-11-10"),
  },
  {
    id: "e3",
    description: "Gas",
    amount: 35.5,
    date: new Date("2024-11-13"),
  },
  {
    id: "e4",
    description: "Restaurant Dinner",
    amount: 89.99,
    date: new Date("2024-07-30"),
  },
  {
    id: "e5",
    description: "Internet Bill",
    amount: 59.99,
    date: new Date("2024-07-25"),
  },
  {
    id: "e6",
    description: "New Shoes",
    amount: 79.95,
    date: new Date("2024-07-20"),
  },
  {
    id: "e7",
    description: "Books",
    amount: 32.5,
    date: new Date("2024-07-15"),
  },
  {
    id: "e8",
    description: "Gym Membership",
    amount: 50.0,
    date: new Date("2024-07-10"),
  },
  {
    id: "e9",
    description: "Coffee Shop",
    amount: 15.75,
    date: new Date("2024-07-05"),
  },
  {
    id: "e10",
    description: "Phone Bill",
    amount: 55.0,
    date: new Date("2024-06-30"),
  },
];

export default DUMMY_EXPENSES;
