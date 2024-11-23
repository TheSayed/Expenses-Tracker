import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ExpenseItem } from "../../data/DUMMY_EXPENSES";
import AppInput from "../../components/AppInput";
import AppButton from "../../UI/AppButton";

interface ExpensesFormProps {
  onCancel: () => void;
  onSubmit: (expenseData: Partial<ExpenseItem>) => void;
  submitButtonLabel: string;
  initialValues?: Partial<ExpenseItem>;
}

const ExpensesForm: React.FC<ExpensesFormProps> = ({
  onCancel,
  onSubmit,
  submitButtonLabel,
  initialValues = {},
}) => {
  // Track both entered values and whether each field has been modified
  const [enteredValue, setEnteredValue] = useState({
    amount: initialValues.amount?.toString() || "",
    date: initialValues.date?.toISOString().split("T")[0] || "",
    description: initialValues.description || "",
  });

  const [modifiedFields, setModifiedFields] = useState({
    amount: false,
    date: false,
    description: false,
  });

  const { amount, date, description } = enteredValue;

  useEffect(() => {
    if (Object.keys(initialValues).length > 0) {
      setEnteredValue({
        amount: initialValues.amount?.toString() || "",
        date: initialValues.date?.toISOString().split("T")[0] || "",
        description: initialValues.description || "",
      });
      // Reset modified fields when initialValues change
      setModifiedFields({
        amount: false,
        date: false,
        description: false,
      });
    }
  }, [initialValues]);

  const inputChangeHandler = (identifier: string, enteredValue: string) => {
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

    if (Object.keys(initialValues).length === 0) {
      if (amount) expenseData.amount = parseFloat(amount);
      if (date) expenseData.date = new Date(date);
      if (description) expenseData.description = description;
    }
    // For updating an existing expense
    else {
      // Only include fields that were modified
      if (modifiedFields.amount && amount) {
        expenseData.amount = parseFloat(amount);
      } else if (initialValues.amount) {
        expenseData.amount = initialValues.amount;
      }

      if (modifiedFields.date && date) {
        expenseData.date = new Date(date);
      } else if (initialValues.date) {
        expenseData.date = initialValues.date;
      }

      if (modifiedFields.description && description) {
        expenseData.description = description;
      } else if (initialValues.description) {
        expenseData.description = initialValues.description;
      }
    }

    onSubmit(expenseData);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>ADD YOUR EXPENSE</Text>
      <View style={styles.rowForm}>
        <AppInput
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: amount,
          }}
        />
        <AppInput
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: date,
          }}
        />
      </View>
      <AppInput
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCapitalize: "sentences",
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: description,
        }}
      />
      <View style={styles.buttonsContainer}>
        <AppButton
          text={submitButtonLabel}
          disabled={false}
          onPress={submitHandler}
        />
        <AppButton text="Cancel" disabled={false} onPress={onCancel} />
      </View>
    </View>
  );
};

export default ExpensesForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
    marginBottom: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  rowForm: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  rowInput: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
