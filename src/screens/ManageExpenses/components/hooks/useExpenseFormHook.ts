import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ExpenseItem } from "../../../../types/types.dto.";

interface UseExpenseFormProps {
  defaultValues?: Partial<ExpenseItem>;
  onSubmit: (expenseData: Partial<ExpenseItem>) => void;
}

const useExpenseForm = ({
  defaultValues = {},
  onSubmit,
}: UseExpenseFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<Partial<ExpenseItem>>({
    defaultValues: {
      amount: defaultValues.amount !== undefined ? defaultValues.amount : 0,
      date: defaultValues.date
        ? new Date(defaultValues.date).toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0],
      description: defaultValues.description || "",
    },
  });

  // Track which fields have been modified
  const [modifiedFields, setModifiedFields] = useState({
    amount: false,
    date: false,
    description: false,
  });

  // Reset form and modification tracking when default values change
  useEffect(() => {
    if (defaultValues && Object.keys(defaultValues).length > 0) {
      reset({
        amount: defaultValues.amount !== undefined ? defaultValues.amount : 0,
        date: defaultValues.date
          ? new Date(defaultValues.date).toISOString().split("T")[0]
          : new Date().toISOString().split("T")[0],
        description: defaultValues.description || "",
      });

      setModifiedFields({
        amount: false,
        date: false,
        description: false,
      });
    }
  }, [defaultValues, reset]);

  // Custom submit handler with additional validation logic
  const submitHandler = handleSubmit((data) => {
    const expenseData: Partial<ExpenseItem> = {};
    const errors: string[] = [];

    // Amount validation
    if (!modifiedFields.amount && defaultValues.amount) {
      expenseData.amount = defaultValues.amount;
    } else if (data.amount) {
      const parsedAmount = parseFloat(data.amount.toString());
      if (!isNaN(parsedAmount) && parsedAmount > 0) {
        expenseData.amount = parsedAmount;
      } else {
        errors.push("Please enter a valid amount.");
      }
    } else {
      errors.push("Please enter a valid amount.");
    }

    // Date validation
    if (!modifiedFields.date && defaultValues.date) {
      expenseData.date = defaultValues.date;
    } else if (data.date) {
      const parsedDate = new Date(data.date);
      if (!isNaN(parsedDate.getTime())) {
        expenseData.date = parsedDate.toISOString().split("T")[0];
      } else {
        errors.push("Please enter a valid date.");
      }
    } else {
      errors.push("Please enter a valid date.");
    }

    // Description validation
    if (!modifiedFields.description && defaultValues.description) {
      expenseData.description = defaultValues.description;
    } else if (data.description) {
      const trimmedDescription = data.description.toString().trim();
      if (trimmedDescription) {
        expenseData.description = trimmedDescription;
      } else {
        errors.push("Please enter a description.");
      }
    } else {
      errors.push("Please enter a description.");
    }

    // If no errors, submit; otherwise, handle errors
    if (errors.length === 0) {
      onSubmit(expenseData);
    }
  });

  // Track field modifications
  const inputChangeHandler = (identifier: string) => {
    setModifiedFields((prev) => ({
      ...prev,
      [identifier]: true,
    }));
  };

  return {
    control,
    errors,
    submitHandler,
    inputChangeHandler,
    setValue,
  };
};

export default useExpenseForm;
