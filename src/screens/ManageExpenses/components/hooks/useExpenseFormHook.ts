import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { ExpenseItem } from "../../../../data/DUMMY_EXPENSES";

interface ExpenseFormHookProps {
  defaultValues: Partial<ExpenseItem>;
  onSubmit: (expenseData: Partial<ExpenseItem>) => void;
}

const useExpenseFormHook = ({
  defaultValues,
  onSubmit,
}: ExpenseFormHookProps) => {
  const [enteredValue, setEnteredValue] = useState({
    amount: defaultValues?.amount?.toString() || "",
    date:
      defaultValues?.date instanceof Date
        ? defaultValues.date.toISOString().split("T")[0]
        : "",
    description: defaultValues?.description || "",
  });

  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const [modifiedFields, setModifiedFields] = useState({
    amount: false,
    date: false,
    description: false,
  });

  const { amount, date, description } = enteredValue;

  // Only update values if defaultValues changes after initial render
  useEffect(() => {
    if (defaultValues && Object.keys(defaultValues).length > 0) {
      const newValues = {
        amount: defaultValues.amount?.toString() || "",
        date:
          defaultValues.date instanceof Date
            ? defaultValues.date.toISOString().split("T")[0]
            : "",
        description: defaultValues.description || "",
      };

      setEnteredValue(newValues);

      setModifiedFields({
        amount: false,
        date: false,
        description: false,
      });
    }
  }, [defaultValues]);

  const inputChangeHandler = (identifier: string, enteredValue: string) => {
    console.log(`Input changed - ${identifier}:`, enteredValue); // Debug log
    setEnteredValue((prevValues) => ({
      ...prevValues,
      [identifier]: enteredValue,
    }));
    setModifiedFields((prev) => ({
      ...prev,
      [identifier]: true,
    }));
  };

  const submitHandler = () => {
    const expenseData: Partial<ExpenseItem> = {};
    const errors: string[] = [];

    if (!modifiedFields.amount && defaultValues.amount) {
      expenseData.amount = defaultValues.amount;
    } else if (amount) {
      const parsedAmount = parseFloat(amount);
      if (!isNaN(parsedAmount) && parsedAmount > 0) {
        expenseData.amount = parsedAmount;
      } else {
        errors.push("Please enter a valid amount.");
      }
    } else {
      errors.push("Please enter a valid amount.");
    }

    if (!modifiedFields.date && defaultValues.date) {
      expenseData.date = defaultValues.date;
    } else if (date) {
      const parsedDate = new Date(date);
      if (!isNaN(parsedDate.getTime())) {
        expenseData.date = parsedDate;
      } else {
        errors.push("Please enter a valid date.");
      }
    } else {
      errors.push("Please enter a valid date.");
    }

    if (!modifiedFields.description && defaultValues.description) {
      expenseData.description = defaultValues.description;
    } else if (description) {
      expenseData.description = description.trim();
      if (!expenseData.description) {
        errors.push("Please enter a description.");
      }
    } else {
      errors.push("Please enter a description.");
    }

    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }

    setValidationErrors([]);
    onSubmit(expenseData);
  };
  return {
    inputChangeHandler,
    submitHandler,
    amount,
    date,
    description,
    validationErrors,
  };
};

export default useExpenseFormHook;
