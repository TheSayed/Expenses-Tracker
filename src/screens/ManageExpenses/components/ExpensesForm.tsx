import React from "react";
import { View, Text } from "react-native";
import { ExpenseItem } from "../../../data/DUMMY_EXPENSES";
import AppInput from "../../../components/AppInput";
import AppButton from "../../../UI/AppButton";
import useExpenseFormHook from "./hooks/useExpenseFormHook";
import styles from "./ExpensesForm.styles";

interface ExpensesFormProps {
  onCancel: () => void;
  onSubmit: (expenseData: Partial<ExpenseItem>) => void;
  submitButtonLabel: string;
  defaultValues?: Partial<ExpenseItem>;
}

const ExpensesForm = ({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultValues = {},
}: ExpensesFormProps) => {
  // Initialize with default values
  const {
    inputChangeHandler,
    submitHandler,
    amount,
    date,
    description,
    validationErrors,
  } = useExpenseFormHook({ defaultValues, onSubmit });

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
            defaultValue: defaultValues?.amount?.toString(),
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
            defaultValue:
              defaultValues?.date instanceof Date
                ? defaultValues.date.toISOString().split("T")[0]
                : "",
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
          defaultValue: defaultValues?.description,
        }}
      />
      {validationErrors.length > 0 && (
        <View style={styles.errorContainer}>
          {validationErrors.map((error, index) => (
            <Text key={index} style={styles.errorText}>
              {error}
            </Text>
          ))}
        </View>
      )}
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
