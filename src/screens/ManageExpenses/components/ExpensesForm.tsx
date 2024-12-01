import React from "react";
import { View, Text } from "react-native";
import { Controller } from "react-hook-form";
import { ExpenseItem } from "../../../types/types.dto.";
import AppInput from "../../../components/AppInput/AppInput";
import AppButton from "../../../components/AppButton/AppButton";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import useExpenseForm from "./hooks/useExpenseFormHook";
import styles from "./ExpensesForm.styles";
import Colors from "../../../constants/Colors";

interface ExpensesFormProps {
  onCancel: () => void;
  onSubmit: (expenseData: Partial<ExpenseItem>) => void;
  submitButtonLabel: string;
  defaultValues?: Partial<ExpenseItem>;
}

const ExpensesForm: React.FC<ExpensesFormProps> = ({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultValues,
}) => {
  const { control, errors, submitHandler, inputChangeHandler } = useExpenseForm(
    { defaultValues, onSubmit }
  );

  console.log(defaultValues, "defaultValues");
  return (
    <View style={styles.form}>
      <Text style={styles.title}>{submitButtonLabel} Your Expense</Text>

      <View style={styles.rowForm}>
        <Controller
          control={control}
          name="amount"
          rules={{
            required: "Amount is required",
            validate: (value) => {
              const parsedAmount = parseFloat(value?.toString() || "0");
              return (
                (!isNaN(parsedAmount) && parsedAmount > 0) || "Invalid amount"
              );
            },
          }}
          render={({ field: { onChange, value } }) => (
            <AppInput
              style={styles.rowInput}
              label="Amount"
              textInputConfig={{
                keyboardType: "decimal-pad",
                onChangeText: (text) => {
                  onChange(text);
                  inputChangeHandler("amount");
                },
                value: value?.toString(),
              }}
            />
          )}
        />

        <Controller
          control={control}
          name="date"
          rules={{ required: "Date is required" }}
          render={({ field: { onChange, value } }) => (
            <>
              <View style={styles.dateInput}>
                <RNDateTimePicker
                  value={value ? new Date(value) : new Date()}
                  onChange={(event, selectedDate) => {
                    onChange(selectedDate);
                    inputChangeHandler("date");
                  }}
                  display="calendar"
                  style={{
                    width: "100%",
                    marginEnd: "40%",
                    display: "flex",
                  }}
                  maximumDate={new Date()}
                  collapsable={true}
                />
              </View>
            </>
          )}
        />
      </View>

      <Controller
        control={control}
        name="description"
        rules={{
          required: "Description is required",
          validate: (value) =>
            value?.toString().trim() !== "" || "Description cannot be empty",
        }}
        render={({ field: { onChange, value } }) => (
          <AppInput
            label="Description"
            textInputConfig={{
              multiline: true,
              autoCapitalize: "sentences",
              onChangeText: (text) => {
                onChange(text);
                inputChangeHandler("description");
              },
              value: value?.toString(),
            }}
          />
        )}
      />

      {(errors.amount || errors.date || errors.description) && (
        <View style={styles.errorContainer}>
          {errors.amount && (
            <Text style={styles.errorText}>{errors.amount.message}</Text>
          )}
          {errors.date && (
            <Text style={styles.errorText}>{errors.date.message}</Text>
          )}
          {errors.description && (
            <Text style={styles.errorText}>{errors.description.message}</Text>
          )}
        </View>
      )}

      <View style={styles.buttonsContainer}>
        <AppButton
          disabled={false}
          text={submitButtonLabel}
          onPress={submitHandler}
        />
        <AppButton disabled={true} text="Cancel" onPress={onCancel} />
      </View>
    </View>
  );
};

export default ExpensesForm;
